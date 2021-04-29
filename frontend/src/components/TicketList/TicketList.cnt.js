import { connect } from 'react-redux';
import { selectTickets } from '../../store/data/tickets/tickets.selectors';

import TicketList from './TicketList.cmp';

const mapStateToProps = (state, ownProps) => ({
  tickets: selectTickets(state),
});

export default connect(mapStateToProps, null)(TicketList);
