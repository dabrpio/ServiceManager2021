import * as employeesAT from './employees.action-types';

const initialState = [];

export default function employeesReducer(state = initialState, action) {
  switch (action.type) {
    case employeesAT.SET_EMPLOYEES: {
      return action.payload;
    }
    default:
      return state;
  }
}
