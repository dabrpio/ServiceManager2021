import { FEATURE_EMPLOYEES_NAME } from '../../constants';

const decorateAT = (text) => `[${FEATURE_EMPLOYEES_NAME}] ${text}`;

export const SET_EMPLOYEES = decorateAT('Set employees');
export const ADD_EMPLOYEE = decorateAT('Add employee');
export const UPDATE_EMPLOYEE = decorateAT('Update employee');
export const DELETE_EMPLOYEE = decorateAT('Delete employee');
export const RESET_EMPLOYEES = decorateAT('Reset employees');
