import { Hidden, Typography } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const headCells = [
  {
    id: 'rma',
    label: 'Rma',
  },
  {
    id: 'dataPrzyjecia',
    label: 'Data',
    smUp: true,
  },
  {
    id: 'rodzaj',
    label: 'Rodzaj',
    smUp: true,
  },
  {
    id: 'marka',
    label: 'Marka',
  },
  {
    id: 'model',
    label: 'Model',
  },
  {
    id: 'kosztNaprawy',
    label: 'Koszt',
  },
  {
    id: 'status',
    label: 'Status',
  },
];

export default function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow className={classes.tr}>
        {headCells.map((headCell) => (
          <Hidden smDown={headCell.smUp} key={headCell.id}>
            <TableCell
              className={clsx(classes.td, classes.th)}
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
};
