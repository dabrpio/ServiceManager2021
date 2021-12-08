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
import { Hidden } from '@material-ui/core';

export default function EnhancedTableToolbar({
  heading,
  searchInput,
  setSearchInput,
  view,
  ticketStatus,
  setTicketStatus,
}) {
  const classes = useToolbarStyles();

  const handleChange = (event, newValue) => {
    setTicketStatus(newValue);
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
        <AppBar
          position="static"
          color="transparent"
          className={classes.appBar}
        >
          <Hidden mdUp>
            <Tabs
              value={ticketStatus}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              centered
            >
              <Tab label="Utworzone" {...a11yProps(0)} />
              <Tab label="Akceptacja kosztów" {...a11yProps(1)} />
              <Tab label="Do zrobienia" {...a11yProps(2)} />
              <Tab label="Zrobione" {...a11yProps(3)} />
              <Tab label="Odrzucone" {...a11yProps(4)} />
            </Tabs>
          </Hidden>
          <Hidden smDown>
            <Tabs
              value={ticketStatus}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Utworzone" {...a11yProps(0)} />
              <Tab label="Akceptacja kosztów" {...a11yProps(1)} />
              <Tab label="Do zrobienia" {...a11yProps(2)} />
              <Tab label="Zrobione" {...a11yProps(3)} />
              <Tab label="Odrzucone" {...a11yProps(4)} />
            </Tabs>
          </Hidden>
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
