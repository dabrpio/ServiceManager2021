import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

export default function App() {
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
        <Link to="/settings">Settings</Link>
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
          <Tickets />
        </Route>
        <Route path="/tickets/:ticketId">
          <Ticket />
        </Route>
        <Route exact path="/employees">
          <Employees />
        </Route>
        <Route path="/employees/:employeeId">
          <Employee />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function Settings() {
  return <h2>Settings</h2>;
}

function Tickets() {
  let { url } = useRouteMatch();

  return (
    <div>
      <h2>Tickets</h2>
      <ul>
        <li>
          <Link to={`${url}/ticket-id1`}>Ticket 1</Link>
        </li>
        <li>
          <Link to={`${url}/ticket-id2`}>Ticket 2</Link>
        </li>
        <li>
          <Link to={`${url}/ticket-id3`}>Ticket 3</Link>
        </li>
        <li>
          <Link to={`${url}/new`}>new</Link>
        </li>
      </ul>
    </div>
  );
}

function Ticket() {
  let { ticketId } = useParams();

  return (
    <div>
      <h3>{ticketId}</h3>
    </div>
  );
}

function Employees() {
  let { url } = useRouteMatch();

  return (
    <div>
      <h2>Employees</h2>
      <ul>
        <li>
          <Link to={`${url}/employee-id1`}>Employee 1</Link>
        </li>
        <li>
          <Link to={`${url}/employee-id2`}>Employee 2</Link>
        </li>
        <li>
          <Link to={`${url}/employee-id3`}>Employee 3</Link>
        </li>
        <li>
          <Link to={`${url}/new`}>new</Link>
        </li>
      </ul>
    </div>
  );
}

function Employee() {
  let { employeeId } = useParams();

  return (
    <div>
      <h3>{employeeId}</h3>
    </div>
  );
}
