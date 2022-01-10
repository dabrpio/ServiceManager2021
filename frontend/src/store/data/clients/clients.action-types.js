import { FEATURE_CLIENTS_NAME } from '../../constants';

const decorateAT = (text) => `[${FEATURE_CLIENTS_NAME}] ${text}`;

export const SET_CLIENTS = decorateAT('Set clients');
export const ADD_CLIENT = decorateAT('Add client');
export const UPDATE_CLIENT = decorateAT('Update client');
export const DELETE_CLIENT = decorateAT('Delete client');
export const SET_DELETE_CLIENT_ERROR = decorateAT('Set delete client error');
export const UNSET_DELETE_CLIENT_ERROR = decorateAT(
  'Unset delete client error'
);
export const RESET_CLIENTS = decorateAT('Reset clients');
