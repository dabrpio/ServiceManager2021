import { Hidden, TableCell, TableRow } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

function HomeTableRow({ row, classes, handleClick }) {
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
          {new Date(row.beginDate).toLocaleDateString('uk-UA')}
        </TableCell>
      </Hidden>

      <Hidden smDown>
        <TableCell className={classes.td}>{row.type}</TableCell>
      </Hidden>
      <TableCell className={classes.td}>{row.brand}</TableCell>
      <TableCell className={classes.td}>{row.model}</TableCell>
      <Hidden smDown>
        <TableCell className={classes.td}>{row.information}</TableCell>
      </Hidden>
    </TableRow>
  );
}

export default HomeTableRow;

HomeTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
