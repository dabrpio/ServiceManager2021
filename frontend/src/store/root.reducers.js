import { combineReducers } from 'redux';
import dataReducers from './data/data.reducers';
import authReducers from './auth/auth.reducers';
import alertReducers from './alerts/alerts.reducers';
import {
  FEATURE_ALERTS_NAME,
  FEATURE_AUTH_NAME,
  FEATURE_DATA_NAME,
} from './constants';

export default combineReducers({
  [FEATURE_DATA_NAME]: dataReducers,
  [FEATURE_AUTH_NAME]: authReducers,
  [FEATURE_ALERTS_NAME]: alertReducers,
});
