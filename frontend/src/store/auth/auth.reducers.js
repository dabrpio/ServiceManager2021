import * as authAT from './auth.action-types';

const initialState = {
  isAuthenticated: false,
};

export default function authReducers(state = initialState, action) {
  switch (action.type) {
    case authAT.SET_AUTH_STATE: {
      return { isAuthenticated: action.payload };
    }
    default:
      return state;
  }
}
