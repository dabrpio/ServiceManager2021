import { connect } from 'react-redux';
import { selectClientsState } from '../../store/data/clients/clients.selectors';

import ClientList from './ClientList.cmp';

const mapStateToProps = (state, ownProps) => ({
  clients: selectClientsState(state),
});

export default connect(mapStateToProps, null)(ClientList);
