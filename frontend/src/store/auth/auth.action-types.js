import { FEATURE_AUTH_NAME } from '../constants';

const decorateAT = (text) => `[${FEATURE_AUTH_NAME}] ${text}`;

export const SET_AUTH_STATE = decorateAT('Set new auth state');
export const SET_USER_TYPE = decorateAT('Set user type');
