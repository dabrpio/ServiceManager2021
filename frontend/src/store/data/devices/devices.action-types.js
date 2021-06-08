import { FEATURE_DEVICES_NAME } from '../../constants';

const decorateAT = (text) => `[${FEATURE_DEVICES_NAME}] ${text}`;

export const SET_DEVICES = decorateAT('Set devices');
export const ADD_DEVICE = decorateAT('Add device');
export const UPDATE_DEVICE = decorateAT('Update device');
export const DELETE_DEVICE = decorateAT('Delete device');
