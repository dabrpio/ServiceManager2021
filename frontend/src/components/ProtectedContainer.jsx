import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { selectUserType } from '../store/auth/auth.selectors';
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

const routes = [
  { path: '/', component: Home },
  { path: '/stats', component: Stats },
  { path: '/tickets', component: TicketList },
  { path: '/employees', component: EmployeeList },
  { path: '/clients', component: ClientList },
  { path: '/devices', component: DeviceList },
  { path: '/settings', component: Settings },
];

const ProtectedContainer = ({ init, userType }) => {
  useEffect(() => {
    init();
  }, [init]);

  return (
    <>
      <NavBar />
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
          <Route path="/tickets" component={TicketList} exact />
        ) : userType === 4 ? (
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
        ) : (
          <Route
            path={routes[0].path}
            component={() => <h2>404 Not Found</h2>}
          />
        )}
        <Redirect to="/" />;
      </Switch>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  userType: selectUserType(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  init: () => {
    if (ownProps.authenticated) {
      dispatch(fetchTickets());
      dispatch(fetchEmployees());
      dispatch(fetchClients());
      dispatch(fetchDevices());
      dispatch(fetchStats());
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedContainer);
