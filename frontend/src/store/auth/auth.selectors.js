import { FEATURE_AUTH_NAME } from '../constants';

export const selectAuthState = (state) =>
  state[FEATURE_AUTH_NAME]['isAuthenticated'];

export const selectUserType = (state) => state[FEATURE_AUTH_NAME]['userType'];
