import { combineReducers } from 'redux';
import {
  FEATURE_TICKETS_NAME,
  FEATURE_EMPLOYEES_NAME,
  FEATURE_CLIENTS_NAME,
  FEATURE_DEVICES_NAME,
  FEATURE_STATS_NAME,
} from '../constants';
import ticketsReducers from './tickets/tickets.reducers';
import employeesReducer from './employees/employees.reducers';
import clientsReducer from './clients/clients.reducers';
import devicesReducer from './devices/devices.reducers';
import statsReducer from './stats/stats.reducers';

export default combineReducers({
  [FEATURE_TICKETS_NAME]: ticketsReducers,
  [FEATURE_EMPLOYEES_NAME]: employeesReducer,
  [FEATURE_CLIENTS_NAME]: clientsReducer,
  [FEATURE_DEVICES_NAME]: devicesReducer,
  [FEATURE_STATS_NAME]: statsReducer,
});
