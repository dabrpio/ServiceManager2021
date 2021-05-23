import React from 'react';
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
import { makeStyles } from '@material-ui/core/styles';

import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: `calc(150px + ${theme.spacing(2)}px)`,
      marginTop: theme.spacing(2),
      height: `calc(100vh -  ${theme.spacing(4)}px)`,
    },
    margin: theme.spacing(2),
    marginTop: `calc(${theme.mixins.toolbar.minHeight}px + ${theme.spacing(
      2
    )}px)`,
    height: `calc(100vh - ${
      theme.mixins.toolbar.minHeight
    }px -  ${theme.spacing(4)}px)`,
    overflow: 'hidden',
  },
  paper: {
    width: '100%',
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: `calc(100% - 116px)`,
    },
    height: `calc(100% - 108px)`,
  },
  table: {
    // minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  hidden: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  td: {
    [theme.breakpoints.down('sm')]: {
      padding: '16px 0 16px 8px ',
    },
    padding: '16px',
  },
  tr: {
    margin: '0 16px',
  },
}));

function createData(rma, data, rodzaj, marka, model, koszt, status) {
  return { rma, data, rodzaj, marka, model, koszt, status };
}

const rows = [
  createData(
    1,
    new Date().toLocaleDateString('pl'),
    'telefon',
    'Hwawei',
    'Y5',
    50,
    'zrobione'
  ),
  createData(
    2,
    new Date().toLocaleDateString('pl'),
    'telefon',
    'Hwawei',
    'Y5',
    51,
    'zrobione'
  ),
  createData(
    3,
    new Date().toLocaleDateString('pl'),
    'telefon',
    'Hwawei',
    'Y5',
    52,
    'zrobione'
  ),
  createData(
    4,
    new Date().toLocaleDateString('pl'),
    'telefon',
    'Hwawei',
    'Y5',
    53,
    'zrobione'
  ),
  createData(
    5,
    new Date().toLocaleDateString('pl'),
    'telefon',
    'iPhone',
    '8',
    58,
    'zrobione'
  ),
  createData(
    6,
    new Date().toLocaleDateString('pl'),
    'telefon',
    'iPhone',
    '7',
    50,
    'zrobione'
  ),
  createData(
    7,
    new Date().toLocaleDateString('pl'),
    'telefon',
    'Hwawei',
    'Y5',
    50,
    'zrobione'
  ),
  createData(
    8,
    new Date().toLocaleDateString('pl'),
    'telefon',
    'Hwawei',
    'Y5',
    50,
    'zrobione'
  ),
  createData(
    9,
    new Date().toLocaleDateString('pl'),
    'telefon',
    'Hwawei',
    'Y5',
    50,
    'zrobione'
  ),
  createData(
    10,
    new Date().toLocaleDateString('pl'),
    'telefon',
    'Hwawei',
    'Y5',
    50,
    'zrobione'
  ),
  createData(
    11,
    new Date().toLocaleDateString('pl'),
    'telefon',
    'Hwawei',
    'Y5',
    50,
    'zrobione'
  ),
  createData(
    12,
    new Date().toLocaleDateString('pl'),
    'telefon',
    'Hwawei',
    'Y5',
    50,
    'zrobione'
  ),
  createData(
    13,
    new Date().toLocaleDateString('pl'),
    'telefon',
    'Hwawei',
    'Y5',
    50,
    'zrobione'
  ),
  createData(
    14,
    new Date().toLocaleDateString('pl'),
    'telefon',
    'Hwawei',
    'Y5',
    50,
    'zrobione'
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
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
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  //   const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event, name) => {
    // const selectedIndex = selected.indexOf(name);
    // let newSelected = [];
    // if (selectedIndex === -1) {
    //   newSelected = newSelected.concat(selected, name);
    // } else if (selectedIndex === 0) {
    //   newSelected = newSelected.concat(selected.slice(1));
    // } else if (selectedIndex === selected.length - 1) {
    //   newSelected = newSelected.concat(selected.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //   newSelected = newSelected.concat(
    //     selected.slice(0, selectedIndex),
    //     selected.slice(selectedIndex + 1)
    //   );
    // }
    // setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //   const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Paper className={classes.root}>
      <EnhancedTableToolbar />
      <TableContainer className={classes.container}>
        <Table
          className={classes.table}
          aria-labelledby="tableTitle"
          aria-label="enhanced table"
          stickyHeader
        >
          <EnhancedTableHead
            classes={classes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                //   const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    className={classes.tr}
                    hover
                    onClick={(event) => handleClick(event, row.rma)}
                    tabIndex={-1}
                    key={row.rma}
                    //   selected={isItemSelected}
                  >
                    <TableCell className={classes.td}>{row.rma}</TableCell>
                    <Hidden smDown>
                      <TableCell className={classes.td}>{row.data}</TableCell>
                    </Hidden>

                    <Hidden smDown>
                      <TableCell className={classes.td}>{row.rodzaj}</TableCell>
                    </Hidden>
                    <TableCell className={classes.td}>{row.marka}</TableCell>
                    <TableCell className={classes.td}>{row.model}</TableCell>
                    <TableCell className={classes.td}>{row.koszt}</TableCell>
                    <TableCell className={classes.td}>{row.status}</TableCell>
                  </TableRow>
                );
              })}
            {!rows && (
              <TableRow style={{ height: '100%' }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        size="small"
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage=""
        nextIconButtonText="Następna strona"
      />
    </Paper>
  );
}
