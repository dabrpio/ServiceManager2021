import { combineReducers } from 'redux';
import ticketsReducers from './tickets/tickets.reducers';
import { FEATURE_TICKETS_NAME } from '../constants';

export default combineReducers({
  [FEATURE_TICKETS_NAME]: ticketsReducers,
});
