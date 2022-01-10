import * as authAT from './auth.action-types';

const getUserType = () => {
  const token = localStorage.getItem('apiKey');
  return token ? parseInt(token.charAt(token.length - 1)) : null;
};

const getUserInfo = () => {
  const companyName = localStorage.getItem('companyName');
  const nip = localStorage.getItem('nip');
  const idCompany = localStorage.getItem('idCompany');

  if (companyName && nip && idCompany) return { companyName, nip, idCompany };
  else
    return {
      companyName: null,
      nip: null,
      idCompany: null,
    };
};

const initialState = {
  isAuthenticated: localStorage.getItem('apiKey') ? true : false,
  userType: getUserType(),
  userInfo: getUserInfo(),
};

export default function authReducers(state = initialState, action) {
  switch (action.type) {
    case authAT.SET_AUTH_STATE: {
      return { ...state, isAuthenticated: action.payload };
    }
    case authAT.SET_USER_TYPE: {
      return { ...state, userType: action.payload };
    }
    case authAT.SET_USER_INFO: {
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    default:
      return state;
  }
}
