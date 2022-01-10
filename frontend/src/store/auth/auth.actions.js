import * as authAT from './auth.action-types';
import { URL } from '../../constants';
import { handleResponse } from '../utils';
import { resetClientsState } from '../data/clients/clients.actions';
import { resetDeviceModelsState } from '../data/devices/devices.actions';
import { resetEmployeesState } from '../data/employees/employees.actions';
import { resetStatsState } from '../data/stats/stats.actions';
import { resetTicketsState } from '../data/tickets/tickets.actions';

const baseUrl = `${URL}/login`;

const clearLocalStorage = () => {
  localStorage.removeItem('apiKey');
  localStorage.removeItem('idCompany');
  localStorage.removeItem('nip');
  localStorage.removeItem('idCompany');
};

const updateAuthState = (newAuthState) => ({
  type: authAT.SET_AUTH_STATE,
  payload: newAuthState,
});

const setUserType = (type) => ({
  type: authAT.SET_USER_TYPE,
  payload: type,
});

const setUserInfo = (info) => ({
  type: authAT.SET_USER_INFO,
  payload: info,
});

export const tryLogin = ({ login, password }) => {
  return (dispatch) => {
    fetch(`${baseUrl}/${login}+${password}`)
      .then((res) => handleResponse(res, dispatch))
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.hasOwnProperty('idCompany')) {
          localStorage.setItem('companyName', res.companyName);
          localStorage.setItem('nip', res.nip);
          localStorage.setItem('idCompany', res.idCompany);
          dispatch(
            setUserInfo({
              companyName: res.companyName,
              nip: res.nip,
              idCompany: res.idCompany,
            })
          );
        }
        localStorage.setItem('apiKey', res.apiKey);
        dispatch(
          setUserType(parseInt(res.apiKey.charAt(res.apiKey.length - 1)))
        );
        dispatch(updateAuthState(true));
      })
      .catch((res) => {
        console.error(res);
        clearLocalStorage();
      });
  };
};

const clearAllData = () => (dispatch) => {
  dispatch(resetClientsState());
  dispatch(resetDeviceModelsState());
  dispatch(resetEmployeesState());
  dispatch(resetStatsState());
  dispatch(resetTicketsState());
};

export const logout = () => (dispatch) => {
  dispatch(updateAuthState(false));
  clearLocalStorage();
  dispatch(clearAllData());
};
