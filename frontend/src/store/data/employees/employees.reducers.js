import * as employeesAT from './employees.action-types';

const initialState = [];

export default function employeesReducer(state = initialState, action) {
  switch (action.type) {
    case employeesAT.SET_EMPLOYEES: {
      return action.payload;
    }
    case employeesAT.ADD_EMPLOYEE: {
      return [action.payload, ...state];
    }
    case employeesAT.UPDATE_EMPLOYEE: {
      return state.map((employee) =>
        employee.idEmployee === action.payload.idEmployee
          ? action.payload
          : employee
      );
    }
    case employeesAT.DELETE_EMPLOYEE: {
      return state.filter((employee) => employee.idEmployee !== action.payload);
    }
    default:
      return state;
  }
}
