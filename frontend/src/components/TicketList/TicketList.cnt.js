import { connect } from 'react-redux';
import { selectTicketsState } from '../../store/data/tickets/tickets.selectors';

import TicketList from './TicketList.cmp';

const mapStateToProps = (state, ownProps) => ({
  tickets: selectTicketsState(state),
});

export default connect(mapStateToProps, null)(TicketList);
