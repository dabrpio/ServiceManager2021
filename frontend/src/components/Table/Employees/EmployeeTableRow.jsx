import { TableCell, TableRow } from '@material-ui/core';

function EmployeeTableRow({ row, classes, handleClick }) {
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
      <TableCell className={classes.td}>{row.id}</TableCell>
      <TableCell className={classes.td}>{row.rodzajUzytkownika}</TableCell>
      <TableCell className={classes.td}>{row.login}</TableCell>
      <TableCell className={classes.td}>{row.nrTel}</TableCell>
    </TableRow>
  );
}

export default EmployeeTableRow;
