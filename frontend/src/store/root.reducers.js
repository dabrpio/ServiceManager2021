import { combineReducers } from 'redux';
import dataReducers from './data/data.reducers';

export default combineReducers({
  [FEATURE_DATA_NAME]: dataReducers,
});
