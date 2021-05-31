import { FEATURE_CLIENTS_NAME } from '../../constants';

const decorateAT = (text) => `[${FEATURE_CLIENTS_NAME}] ${text}`;

export const SET_CLIENTS = decorateAT('Set clients');
export const SET_CLIENT = decorateAT('Set client');
