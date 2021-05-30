import { FEATURE_EMPLOYEES_NAME } from '../../constants';

const decorateAT = (text) => `[${FEATURE_EMPLOYEES_NAME}] ${text}`;

export const SET_EMPLOYEES = decorateAT('Set employees');
export const SET_EMPLOYEE = decorateAT('Set employee');
