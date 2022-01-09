import * as authAT from './auth.action-types';
import { URL } from '../../constants';
import { handleResponse } from '../utils';

const baseUrl = `${URL}/login`;

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
        localStorage.removeItem('apiKey');
      });
  };
};

export const logout = () => (dispatch) => {
  dispatch(updateAuthState(false));
  localStorage.removeItem('apiKey');
};
