import * as authAT from './auth.action-types';

const getUserType = () => {
  const token = localStorage.getItem('apiKey');
  return token ? parseInt(token.charAt(token.length - 1)) : null;
};
const initialState = {
  isAuthenticated: localStorage.getItem('apiKey') ? true : false,
  userType: getUserType(),
};

export default function authReducers(state = initialState, action) {
  switch (action.type) {
    case authAT.SET_AUTH_STATE: {
      return { ...state, isAuthenticated: action.payload };
    }
    case authAT.SET_USER_TYPE: {
      return { ...state, userType: action.payload };
    }
    default:
      return state;
  }
}
