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
      key={row.idKlienta}
    >
      <Hidden smDown>
        <TableCell className={classes.td}>{row.idKlienta}</TableCell>
      </Hidden>
      <TableCell className={classes.td}>{row.imie}</TableCell>
      <TableCell className={classes.td}>{row.nazwisko}</TableCell>
      <TableCell className={classes.td}>{row.nrTel}</TableCell>
      <Hidden smDown>
        <TableCell className={classes.td}>{row.eMail}</TableCell>
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
