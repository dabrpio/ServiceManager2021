import { FEATURE_CLIENTS_NAME } from '../../constants';

const decorateAT = (text) => `[${FEATURE_CLIENTS_NAME}] ${text}`;

export const SET_CLIENTS = decorateAT('Set clients');
export const ADD_CLIENT = decorateAT('Add client');
export const UPDATE_CLIENT = decorateAT('Update client');
export const DELETE_CLIENT = decorateAT('Delete client');
export const RESET_CLIENTS = decorateAT('Reset clients');
