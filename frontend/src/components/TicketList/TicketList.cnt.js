import { connect } from 'react-redux';
import { selectTicketsState } from '../../store/data/tickets/tickets.selectors';

import TicketList from './TicketList.cmp';

const mapStateToProps = (state, ownProps) => ({
  tickets: selectTicketsState(state).slice().reverse(),
});

export default connect(mapStateToProps, null)(TicketList);
