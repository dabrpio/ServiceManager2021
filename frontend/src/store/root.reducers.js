import { combineReducers } from 'redux';
import dataReducers from './data/data.reducers';
import authReducers from './auth/auth.reducers';
import { FEATURE_AUTH_NAME, FEATURE_DATA_NAME } from './constants';

export default combineReducers({
  [FEATURE_DATA_NAME]: dataReducers,
  [FEATURE_AUTH_NAME]: authReducers,
});
