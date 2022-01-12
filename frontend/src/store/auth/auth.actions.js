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
  localStorage.removeItem('idEmployee');
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
          localStorage.setItem('idCompany', res.idCompany);
          dispatch(
            setUserInfo({
              idCompany: res.idCompany,
              idEmployee: res.idEmployee,
            })
          );
        } else {
          dispatch(
            setUserInfo({
              idCompany: null,
              idEmployee: res.idEmployee,
            })
          );
        }
        localStorage.setItem('idEmployee', res.idEmployee);
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
  dispatch(setUserType(null));
  dispatch(
    setUserInfo({
      idCompany: null,
      idEmployee: null,
    })
  );
};

export const logout = () => (dispatch) => {
  dispatch(updateAuthState(false));
  clearLocalStorage();
  dispatch(clearAllData());
};
