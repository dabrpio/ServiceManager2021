import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

import AddEmployeeDialog from './Dialogs/Employees/AddEmployeeDialog';
import AddTicketDialog from './Dialogs/Tickets/AddTicketDialog';
import AddClientDialog from './Dialogs/Clients/AddClientDialog';
import { useToolbarStyles } from './styles';
import AddDeviceDialog from './Dialogs/Devices/AddDeviceDialog';

export default function EnhancedTableToolbar({
  heading,
  searchInput,
  setSearchInput,
  homeTable,
}) {
  const classes = useToolbarStyles();
  const location = useLocation();

  return (
    <Toolbar className={classes.root}>
      {location.pathname === '/' && <AddTicketDialog />}
      {location.pathname === '/tickets' && <AddTicketDialog />}
      {location.pathname === '/employees' && <AddEmployeeDialog />}
      {location.pathname === '/clients' && <AddClientDialog />}
      {location.pathname === '/devices' && <AddDeviceDialog />}
      <Typography
        className={clsx(classes.title, { [classes.homeTableText]: homeTable })}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {heading}
      </Typography>

      <TextField
        placeholder="Szukaj.."
        type="text"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
        size="small"
      />
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  heading: PropTypes.string.isRequired,
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
};
