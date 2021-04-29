import { connect } from 'react-redux';
import { postTicket } from '../../store/data/tickets/tickets.actions';

import Ticket from './Ticket.cmp';

const mapDispatchToProps = (dispatch) => ({
  addTicket: (data) => dispatch(postTicket(data)),
});

export default connect(null, mapDispatchToProps)(Ticket);
