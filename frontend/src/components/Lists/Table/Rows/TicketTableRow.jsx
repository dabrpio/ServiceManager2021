import { Hidden, TableCell, TableRow } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import React from 'react';

function TicketTableRow({ row, classes, handleClick }) {
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
        <TableCell className={classes.td}>{row.repairCost ?? '—'}</TableCell>
      </Hidden>

      <TableCell className={classes.td}>
        {row.status === 'created' ? (
          <FiberNewIcon
            classes={{
              root: classes.icon,
            }}
          />
        ) : row.status === 'cost_approval' ? (
          <HourglassEmptyIcon
            classes={{
              root: classes.icon,
            }}
          />
        ) : row.status === 'accepted' ? (
          <BuildIcon
            classes={{
              root: classes.icon,
            }}
          />
        ) : row.status === 'done' ? (
          <CheckCircleIcon
            classes={{
              root: classes.icon,
            }}
          />
        ) : row.status === 'rejected' ? (
          <DeleteIcon
            classes={{
              root: classes.icon,
            }}
          />
        ) : null}
      </TableCell>
    </TableRow>
  );
}

export default TicketTableRow;

TicketTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
