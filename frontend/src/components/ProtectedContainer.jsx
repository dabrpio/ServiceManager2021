import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { fetchClients } from '../store/data/clients/clients.actions';
import { fetchDevices } from '../store/data/devices/devices.actions';
import { fetchEmployees } from '../store/data/employees/employees.actions';
import { fetchStats } from '../store/data/stats/stats.actions';
import {
  fetchTickets,
  fetchTicketsBusinessClient,
} from '../store/data/tickets/tickets.actions';
import ClientList from './Lists/ClientList';
import DeviceList from './Lists/DeviceList';
import EmployeeList from './Lists/EmployeeList';
import Home from './Lists/Home';
import TicketList from './Lists/TicketList';
import NavBar from './NavBar';
import Settings from './Settings';
import Stats from './Stats';
import Alert from './Alert';

const routes = [
  { path: '/', component: Home },
  { path: '/stats', component: Stats },
  { path: '/tickets', component: TicketList },
  { path: '/employees', component: EmployeeList },
  { path: '/clients', component: ClientList },
  { path: '/devices', component: DeviceList },
  { path: '/settings', component: Settings },
];

const ProtectedContainer = ({ init, authState }) => {
  const { userType } = authState;
  useEffect(() => {
    init();
  }, [init]);
  return (
    <>
      <NavBar />
      <Alert />
      <Switch>
        {userType === 1 || userType === 2 ? (
          routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact
            />
          ))
        ) : userType === 3 ? (
          routes
            .filter((r) => r.path !== '/stats')
            .map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact
              />
            ))
        ) : userType === 4 ? (
          routes
            .filter((r) => r.path === '/tickets' || r.path === '/settings')
            .map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact
              />
            ))
        ) : (
          <Route
            path={routes[0].path}
            component={() => <h2>404 Not Found</h2>}
          />
        )}
        <Redirect to={userType === 4 ? '/tickets' : '/'} />;
      </Switch>
    </>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  init: () => {
    if (ownProps.authState.isAuthenticated) {
      if (ownProps.authState.userType === 4) {
        dispatch(
          fetchTicketsBusinessClient(ownProps.authState.userInfo.idCompany)
        );
        dispatch(fetchDevices());
      } else {
        dispatch(fetchTickets());
        dispatch(fetchEmployees());
        dispatch(fetchClients());
        dispatch(fetchDevices());
        dispatch(fetchStats());
      }
    }
  },
});

export default connect(null, mapDispatchToProps)(ProtectedContainer);
