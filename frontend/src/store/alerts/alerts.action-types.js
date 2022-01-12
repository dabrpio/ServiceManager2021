import { FEATURE_ALERTS_NAME } from '../constants';

const decorateAT = (text) => `[${FEATURE_ALERTS_NAME}] ${text}`;

export const SET_ALERT = decorateAT('Set alert');
export const UNSET_ALERT = decorateAT('Unset alert');
