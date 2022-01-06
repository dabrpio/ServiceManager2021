import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { fetchClients } from '../store/data/clients/clients.actions';
import { fetchDevices } from '../store/data/devices/devices.actions';
import { fetchEmployees } from '../store/data/employees/employees.actions';
import { fetchStats } from '../store/data/stats/stats.actions';
import { fetchTickets } from '../store/data/tickets/tickets.actions';
import ClientList from './Lists/ClientList';
import DeviceList from './Lists/DeviceList';
import EmployeeList from './Lists/EmployeeList';
import Home from './Lists/Home';
import TicketList from './Lists/TicketList';
import NavBar from './NavBar';
import Settings from './Settings';
import Stats from './Stats';

const ProtectedContainer = ({ init }) => {
  useEffect(() => {
    init();
  }, [init]);

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stats" component={Stats} />
        <Route exact path="/tickets" component={TicketList} />
        <Route exact path="/employees" component={EmployeeList} />
        <Route exact path="/clients" component={ClientList} />
        <Route exact path="/devices" component={DeviceList} />
        <Route exact path="/settings" component={Settings} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  init: () => {
    console.log(ownProps);
    if (ownProps.authenticated) {
      dispatch(fetchTickets());
      dispatch(fetchEmployees());
      dispatch(fetchClients());
      dispatch(fetchDevices());
      dispatch(fetchStats());
    }
  },
});

export default connect(null, mapDispatchToProps)(ProtectedContainer);
