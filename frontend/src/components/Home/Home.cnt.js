import { connect } from 'react-redux';
import { selectDoneTicketsState } from '../../store/data/tickets/tickets.selectors';

import Home from './Home.cmp';

const mapStateToProps = (state, ownProps) => ({
  tickets: selectDoneTicketsState(state),
});

export default connect(mapStateToProps, null)(Home);
