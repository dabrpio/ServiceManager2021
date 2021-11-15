import { TableCell, TableRow } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

function DeviceTableRow({ row, classes, handleClick }) {
  return (
    <TableRow
      classes={{
        root: classes.tr,
        selected: classes.selectedRow,
      }}
      hover
      onClick={(event) => handleClick(event, row)}
      tabIndex={-1}
      key={row.id}
    >
      <TableCell className={classes.td}>{row.idDevices}</TableCell>
      <TableCell className={classes.td}>{row.type}</TableCell>
      <TableCell className={classes.td}>{row.brand}</TableCell>
      <TableCell className={classes.td}>{row.model}</TableCell>
    </TableRow>
  );
}

export default DeviceTableRow;

DeviceTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
