import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from '@material-ui/core';

import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import SelectedTicketDialog from './Tickets/SelectedTicketDialog';

import { stableSort, getComparator } from './sorting';
import { useTableCustomHook } from './hooks';
import { useTableStyles } from './styles';

const withEnhancedTable =
  (EnhancedRow) =>
  ({ data, headCells, heading }) => {
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
      selectedTicketData,
      setSelectedTicketData,
      filteredData,
    } = useTableCustomHook(data);
    const classes = useTableStyles();

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
            heading={heading}
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
                        key={row.rma ?? row.id}
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
            rowsPerPageOptions={[10, 25, 50]}
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
