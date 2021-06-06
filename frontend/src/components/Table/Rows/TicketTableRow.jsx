import { Hidden, TableCell, TableRow } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PropTypes from 'prop-types';

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
          {new Date(row.dataPrzyjecia).toLocaleDateString('pl')}
        </TableCell>
      </Hidden>

      <Hidden smDown>
        <TableCell className={classes.td}>{row.rodzaj}</TableCell>
      </Hidden>
      <TableCell className={classes.td}>{row.marka}</TableCell>
      <TableCell className={classes.td}>{row.model}</TableCell>
      <Hidden smDown>
        <TableCell className={classes.td}>{row.kosztNaprawy}</TableCell>
      </Hidden>

      <TableCell className={classes.td}>
        {row.status === 'zrobione' ? (
          <CheckCircleIcon
            classes={{
              root: classes.checkIcon,
            }}
          />
        ) : (
          <BuildIcon
            classes={{
              root: classes.buildIcon,
            }}
          />
        )}
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
