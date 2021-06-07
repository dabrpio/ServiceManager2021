import { connect } from 'react-redux';
import { fetchClients } from '../store/data/clients/clients.actions';
import { fetchEmployees } from '../store/data/employees/employees.actions';
import { fetchTickets } from '../store/data/tickets/tickets.actions';

import App from './App.cmp';

const mapDispatchToProps = (dispatch, ownProps) => ({
  init: () => {
    dispatch(fetchTickets());
    // dispatch(fetchEmployees());
    // dispatch(fetchClients());
  },
});

export default connect(null, mapDispatchToProps)(App);
