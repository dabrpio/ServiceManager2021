import { FEATURE_DEVICES_NAME } from '../../constants';

const decorateAT = (text) => `[${FEATURE_DEVICES_NAME}] ${text}`;

export const SET_DEVICE_TYPES = decorateAT('Set device types');
export const SET_DEVICE_BRANDS = decorateAT('Set device brands');
export const SET_DEVICE_MODELS = decorateAT('Set device models');
export const ADD_DEVICE = decorateAT('Add device');
export const UPDATE_DEVICE = decorateAT('Update device');
export const DELETE_DEVICE = decorateAT('Delete device');
