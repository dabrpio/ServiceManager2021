import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { plPL } from '@material-ui/core/locale';

import ClientList from './ClientList';
import EmployeeList from './EmployeeList';
import Home from './Home';
import Login from './Login';
import Settings from './Settings';
import TicketList from './TicketList';
import NavBar from './NavBar';

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
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route exact path="/tickets">
        <TicketList />
      </Route>
      <Route exact path="/employees">
        <EmployeeList />
      </Route>
      <Route exact path="/clients">
        <ClientList />
      </Route>
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
