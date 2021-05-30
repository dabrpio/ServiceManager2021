import { combineReducers } from 'redux';
import { FEATURE_TICKETS_NAME, FEATURE_EMPLOYEES_NAME } from '../constants';
import ticketsReducers from './tickets/tickets.reducers';
import employeesReducer from './employees/employees.reducers';

export default combineReducers({
  [FEATURE_TICKETS_NAME]: ticketsReducers,
  [FEATURE_EMPLOYEES_NAME]: employeesReducer,
});
