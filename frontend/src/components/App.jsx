import { plPL } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { fetchClients } from '../store/data/clients/clients.actions';
import { fetchDevices } from '../store/data/devices/devices.actions';
import { fetchEmployees } from '../store/data/employees/employees.actions';
import { fetchTickets } from '../store/data/tickets/tickets.actions';
import ClientList from './Lists/ClientList';
import DeviceList from './Lists/DeviceList';
import EmployeeList from './Lists/EmployeeList';
import Home from './Lists/Home';
import TicketList from './Lists/TicketList';
import Login from './Login/Login';
import StatusLogin from './Login/StatusLogin';
import NavBar from './NavBar';
import Settings from './Settings';
import Stats from './Stats';

const theme = createMuiTheme({}, plPL);

function App({ init }) {
  useEffect(() => {
    init();
  }, [init]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/status" component={StatusLogin} />
          <Route component={DefaultContainer} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const LoginContainer = () => (
  <div className="container">
    <Route exact path="/" render={() => <Redirect to="/login" />} />
    <Route path="/login">
      <Login />
    </Route>
  </div>
);

const DefaultContainer = () => (
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  init: () => {
    dispatch(fetchTickets());
    dispatch(fetchEmployees());
    dispatch(fetchClients());
    dispatch(fetchDevices());
  },
});

export default connect(null, mapDispatchToProps)(App);
