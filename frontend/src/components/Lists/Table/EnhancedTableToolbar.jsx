import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import React from 'react';
import AddClientDialog from './Dialogs/Clients/AddClientDialog';
import AddDeviceDialog from './Dialogs/Devices/AddDeviceDialog';
import AddEmployeeDialog from './Dialogs/Employees/AddEmployeeDialog';
import AddTicketDialog from './Dialogs/Tickets/AddTicketDialog';
import { useToolbarStyles } from './styles';

export default function EnhancedTableToolbar({
  heading,
  searchInput,
  setSearchInput,
  view,
}) {
  const classes = useToolbarStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  };

  return (
    <Toolbar className={classes.root}>
      <div className={classes.toolbar}>
        {view === 'home' && <AddTicketDialog />}
        {view === 'tickets' && <AddTicketDialog />}
        {view === 'employees' && <AddEmployeeDialog />}
        {view === 'clients' && <AddClientDialog />}
        {view === 'devices' && <AddDeviceDialog />}
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="h4"
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
      </div>
      {view === 'home' && (
        <AppBar position="static" color="transparent">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Utworzone" {...a11yProps(0)} />
            <Tab label="Akceptacja kosztów" {...a11yProps(0)} />
            <Tab label="Do zrobienia" {...a11yProps(0)} />
            <Tab label="Zrobione" {...a11yProps(0)} />
            <Tab label="Odrzucone" {...a11yProps(0)} />
          </Tabs>
        </AppBar>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  heading: PropTypes.string.isRequired,
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
};
