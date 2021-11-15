import { Hidden, TableCell, TableRow } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { employeeTypes } from '../dropdownOptionsEmployee';

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
      <TableCell className={classes.td}>
        {employeeTypes.find((e) => e.titleId === row.type)?.title ??
          'Undefined'}
      </TableCell>
      <TableCell className={classes.td}>{row.name}</TableCell>
      <TableCell className={classes.td}>{row.surname}</TableCell>
      <Hidden smDown>
        <TableCell className={classes.td}>{row.phoneNumber}</TableCell>
      </Hidden>
    </TableRow>
  );
}

export default EmployeeTableRow;

EmployeeTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
