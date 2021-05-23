import { Hidden, Typography } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import PropTypes from 'prop-types';

const headCells = [
  {
    id: 'rma',
    label: 'Rma',
  },
  {
    id: 'data',
    label: 'data',
    smUp: true,
  },
  {
    id: 'rodzaj',
    label: 'rodzaj',
    smUp: true,
  },
  {
    id: 'marka',
    label: 'marka',
  },
  {
    id: 'model',
    label: 'model',
  },
  {
    id: 'koszt',
    label: 'koszt',
  },
  {
    id: 'status',
    label: 'status',
  },
];

export default function EnhancedTableHead(props) {
  const { classes, order, orderBy, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow className={classes.tr}>
        {/* <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell> */}
        {headCells.map((headCell) => (
          <Hidden smDown={headCell.smUp} key={headCell.id}>
            <TableCell
              className={classes.td}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
              style={{ width: headCell.width }}
              onClick={createSortHandler(headCell.id)}
            >
              <Hidden xsDown>
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <span className={classes.visuallyHidden}>
                      {order === 'desc'
                        ? 'sorted descending'
                        : 'sorted ascending'}
                    </span>
                  ) : null}
                </TableSortLabel>
              </Hidden>
              <Hidden smUp>
                <Typography style={{ fontSize: '14px' }}>
                  {headCell.label}
                </Typography>
              </Hidden>
            </TableCell>
          </Hidden>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};