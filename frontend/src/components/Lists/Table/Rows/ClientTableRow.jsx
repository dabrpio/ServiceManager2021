import { Hidden, TableCell, TableRow } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

function ClientTableRow({ row, classes, handleClick }) {
  return (
    <TableRow
      classes={{
        root: classes.tr,
        selected: classes.selectedRow,
      }}
      hover
      onClick={(event) => handleClick(event, row)}
      tabIndex={-1}
      key={row.idClient}
    >
      <Hidden smDown>
        <TableCell className={classes.td}>{row.idClient}</TableCell>
      </Hidden>
      <TableCell className={classes.td}>{row.name}</TableCell>
      <TableCell className={classes.td}>{row.surname}</TableCell>
      <TableCell className={classes.td}>{row.phoneNumber}</TableCell>
      <Hidden smDown>
        <TableCell className={classes.td}>{row.email}</TableCell>
      </Hidden>
    </TableRow>
  );
}

export default ClientTableRow;

ClientTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
