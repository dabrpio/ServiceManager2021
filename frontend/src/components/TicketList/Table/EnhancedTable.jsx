import {
  Hidden,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PropTypes from 'prop-types';
import { useState } from 'react';

import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import SelectedTicketDialog from './SelectedTicketDialog';
import { useStyles } from './useTableStyles';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function descendingDateComparator(a, b, orderBy) {
  if (new Date(b[orderBy]) < new Date(a[orderBy])) {
    return -1;
  }
  if (new Date(b[orderBy]) > new Date(a[orderBy])) {
    return 1;
  }
  return 0;
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function getComparator(order, orderBy) {
  if (orderBy === 'dataPrzyjecia') {
    return order === 'desc'
      ? (a, b) => descendingDateComparator(a, b, orderBy)
      : (a, b) => -descendingDateComparator(a, b, orderBy);
  } else {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
}

const useFilter = (tickets, searchInput) => {
  const regex = new RegExp(`${searchInput}`, 'i');
  if (searchInput === '') return tickets;
  else
    return tickets.filter((ticket) =>
      Object.values(ticket).some((value) => `${value}`.match(regex))
    );
};

export default function EnhancedTable({ tickets }) {
  const classes = useStyles();
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('rma');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchInput, setSearchInput] = useState('');
  const [selectedTicketData, setSelectedTicketData] = useState(null);
  const data = useFilter(tickets, searchInput);

  const handleRequestSort = (_, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (_, row) => {
    setSelectedTicketData(row);
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleCloseDialog = () => setSelectedTicketData(null);

  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <>
      {selectedTicketData && (
        <SelectedTicketDialog
          ticketData={selectedTicketData}
          closeDialog={handleCloseDialog}
        />
      )}
      <Paper className={classes.root}>
        <EnhancedTableToolbar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <TableContainer className={classes.container}>
          <Table
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
            stickyHeader
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      classes={{
                        root: classes.tr,
                        selected: classes.selectedRow,
                      }}
                      hover
                      onClick={(event) => handleClick(event, row)}
                      tabIndex={-1}
                      key={row.rma}
                    >
                      <TableCell className={classes.td}>{row.rma}</TableCell>
                      <Hidden smDown>
                        <TableCell className={classes.td}>
                          {new Date(row.dataPrzyjecia).toLocaleDateString('pl')}
                        </TableCell>
                      </Hidden>

                      <Hidden smDown>
                        <TableCell className={classes.td}>
                          {row.rodzaj}
                        </TableCell>
                      </Hidden>
                      <TableCell className={classes.td}>{row.marka}</TableCell>
                      <TableCell className={classes.td}>{row.model}</TableCell>
                      <TableCell className={classes.td}>
                        {row.kosztNaprawy}
                      </TableCell>
                      <TableCell className={classes.td}>
                        {row.status === 'zrobione' ? (
                          <CheckCircleIcon
                            classes={{
                              root: classes.checkIcon,
                            }}
                          />
                        ) : (
                          <BuildIcon
                            classes={{
                              root: classes.buildIcon,
                            }}
                          />
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {!tickets && (
                <TableRow style={{ height: '100%' }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          size="small"
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage=""
          nextIconButtonText="Następna strona"
        />
      </Paper>
    </>
  );
}

EnhancedTable.propTypes = {
  tickets: PropTypes.array.isRequired,
};
