import * as alertsAT from './alerts.action-types';

const initialState = '';

export default function errorsReducers(state = initialState, action) {
  switch (action.type) {
    case alertsAT.SET_ALERT: {
      return action.payload;
    }
    case alertsAT.UNSET_ALERT: {
      return initialState;
    }
    default:
      return state;
  }
}
