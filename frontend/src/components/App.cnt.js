import { connect } from 'react-redux';
import { fetchTickets } from '../store/data/tickets/tickets.actions';

import App from './App.cmp';

const mapDispatchToProps = (dispatch, ownProps) => ({
  init: () => dispatch(fetchTickets()),
});

export default connect(null, mapDispatchToProps)(App);
