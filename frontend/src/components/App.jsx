import { plPL } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { fetchClients } from '../store/data/clients/clients.actions';
import { fetchDevices } from '../store/data/devices/devices.actions';
import { fetchEmployees } from '../store/data/employees/employees.actions';
import { fetchTickets } from '../store/data/tickets/tickets.actions';
import ClientList from './ClientList';
import DeviceList from './DeviceList';
import EmployeeList from './EmployeeList';
import Home from './Home';
import Login from './Login/Login';
import NavBar from './NavBar';
import Settings from './Settings';
import Status from './Status';
import StatusLogin from './Login/StatusLogin';
import TicketList from './TicketList';

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
          <Route path="/status/:rma" component={Status} />
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
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/tickets" component={TicketList} />
      <Route exact path="/employees" component={EmployeeList} />
      <Route exact path="/clients" component={ClientList} />
      <Route exact path="/devices" component={DeviceList} />
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
