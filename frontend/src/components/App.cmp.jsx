import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import EmployeeList from './EmployeeList';
import Employee from './Employee';
import Home from './Home';
import Login from './Login';
import Settings from './Settings';
import TicketList from './TicketList';
import Ticket from './Ticket';
import NavBar from './NavBar';

function App({ init }) {
  // useEffect(() => {
  //   init();
  // }, [init]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Route component={DefaultContainer} />
      </Switch>
    </BrowserRouter>
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
      <Route path="/tickets/:ticketId">
        <Ticket />
      </Route>
      <Route exact path="/employees">
        <EmployeeList />
      </Route>
      <Route path="/employees/:employeeId">
        <Employee />
      </Route>
    </Switch>
  </>
);

export default App;
