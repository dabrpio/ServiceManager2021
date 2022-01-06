import * as authAT from './auth.action-types';
import { URL } from '../../constants';

const baseUrl = `${URL}/login`;

const updateAuthState = (newAuthState) => ({
  type: authAT.SET_AUTH_STATE,
  payload: newAuthState,
});

export const tryLogin = ({ login, password }) => {
  return (dispatch) => {
    fetch(`${baseUrl}/${login}+${password}`)
      .then((res) => res.text())
      .then((res) => {
        // right now good response is text and bad json
        console.log(res);
        dispatch(updateAuthState(true));
      })
      .catch((res) => {
        console.error(res);
      });
  };
};

export const logout = () => (dispatch) => dispatch(updateAuthState(false));
