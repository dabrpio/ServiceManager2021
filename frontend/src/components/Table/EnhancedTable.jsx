import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import { useLocation } from 'react-router-dom';

import SelectedClientDialog from './Dialogs/Clients/SelectedClientDialog';
import SelectedEmployeeDialog from './Dialogs/Employees/SelectedEmployeeDialog';
import SelectedTicketDialog from './Dialogs/Tickets/SelectedTicketDialog';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';

import { useTableCustomHook } from './hooks';
import { getComparator, stableSort } from './sorting';
import { useTableStyles } from './styles';

const withEnhancedTable =
  (EnhancedRow) =>
  ({ data, headCells, heading }) => {
    const location = useLocation();
    const {
      order,
      setOrder,
      orderBy,
      setOrderBy,
      page,
      setPage,
      rowsPerPage,
      setRowsPerPage,
      searchInput,
      setSearchInput,
      selectedRowData,
      setSelectedRowData,
      filteredData,
    } = useTableCustomHook(data);
    const classes = useTableStyles();

    const handleRequestSort = (_, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

    const handleClick = (_, row) => {
      setSelectedRowData(row);
    };

    const handleChangePage = (_, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const handleCloseDialog = () => setSelectedRowData(null);

    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <>
        {selectedRowData && location.pathname === '/tickets' && (
          <SelectedTicketDialog
            ticketData={selectedRowData}
            closeDialog={handleCloseDialog}
          />
        )}
        {selectedRowData && location.pathname === '/employees' && (
          <SelectedEmployeeDialog
            employeeData={selectedRowData}
            closeDialog={handleCloseDialog}
          />
        )}
        {selectedRowData && location.pathname === '/clients' && (
          <SelectedClientDialog
            clientData={selectedRowData}
            closeDialog={handleCloseDialog}
          />
        )}
        <Paper className={classes.root}>
          <EnhancedTableToolbar
            heading={heading}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <TableContainer className={classes.container}>
            <Table
              aria-labelledby="tableTitle"
              aria-label="enhanced table"
              className={classes.table}
              stickyHeader
            >
              <EnhancedTableHead
                headCells={headCells}
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={filteredData.length}
              />
              <TableBody>
                {stableSort(filteredData, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <EnhancedRow
                        key={row.rma ?? row.id ?? row.idKlienta}
                        row={row}
                        classes={classes}
                        handleClick={handleClick}
                      />
                    );
                  })}
                {!filteredData && (
                  <TableRow style={{ height: '100%' }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[25, 50, 100]}
            component="div"
            count={filteredData.length}
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
  };

export default withEnhancedTable;
