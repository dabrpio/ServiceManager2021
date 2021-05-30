import { connect } from 'react-redux';
import { fetchEmployees } from '../store/data/employees/employees.actions';
import { fetchTickets } from '../store/data/tickets/tickets.actions';

import App from './App.cmp';

const mapDispatchToProps = (dispatch, ownProps) => ({
  init: () => {
    dispatch(fetchTickets());
    dispatch(fetchEmployees());
  },
});

export default connect(null, mapDispatchToProps)(App);
