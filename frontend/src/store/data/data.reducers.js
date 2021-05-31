import { combineReducers } from 'redux';
import {
  FEATURE_TICKETS_NAME,
  FEATURE_EMPLOYEES_NAME,
  FEATURE_CLIENTS_NAME,
} from '../constants';
import ticketsReducers from './tickets/tickets.reducers';
import employeesReducer from './employees/employees.reducers';
import clientsReducer from './clients/clients.reducers';

export default combineReducers({
  [FEATURE_TICKETS_NAME]: ticketsReducers,
  [FEATURE_EMPLOYEES_NAME]: employeesReducer,
  [FEATURE_CLIENTS_NAME]: clientsReducer,
});
