import * as alertsAT from './alerts.action-types';

export const setAlert = (data) => ({
  type: alertsAT.SET_ALERT,
  payload: data,
});

export const unsetAlert = () => ({
  type: alertsAT.UNSET_ALERT,
});
