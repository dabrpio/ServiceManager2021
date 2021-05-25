import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import FilterListIcon from '@material-ui/icons/FilterList';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import AddTicketDialog from './AddTicketDialog';
import { useToolbarStyles } from './useToolbarStyles';

export default function EnhancedTableToolbar({ searchInput, setSearchInput }) {
  const classes = useToolbarStyles();

  return (
    <Toolbar className={clsx(classes.root)}>
      <AddTicketDialog />
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Zlecenia
      </Typography>

      <TextField
        placeholder="Szukaj.."
        type="text"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
        // style={{ marginTop: 16, marginBottom: 8 }}
        size="small"
      />

      <Tooltip title="Filtrowanie">
        <IconButton aria-label="filter list">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
};
