import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import EmployeeList from './EmployeeList';
import Employee from './EmployeeList/Employee';
import Home from './Home';
import Login from './Login';
import Settings from './Settings';
import TicketList from './TicketList';
import Ticket from './TicketList/Ticket';

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/tickets">Tickets</Link>
        </li>
        <li>
          <Link to="/employees">Employees</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
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
    </BrowserRouter>
  );
}

export default App;
