import * as employeesAT from './employees.action-types';
import { URL } from '../../../constants';
import { logout } from '../../auth/auth.actions';

const baseUrl = `${URL}/employees`;

const setEmployeesState = (data) => ({
  type: employeesAT.SET_EMPLOYEES,
  payload: data,
});

const addEmployeeState = (employee) => ({
  type: employeesAT.ADD_EMPLOYEE,
  payload: employee,
});

const updateEmployeeState = (employee) => ({
  type: employeesAT.UPDATE_EMPLOYEE,
  payload: employee,
});

const deleteEmployeeState = (id) => ({
  type: employeesAT.DELETE_EMPLOYEE,
  payload: id,
});

// GET
export const fetchEmployees = () => {
  return (dispatch) => {
    fetch(baseUrl)
      .then((res) => handleErrors(res, dispatch))
      .then((res) => res.json())
      .then((data) => dispatch(setEmployeesState(data)))
      .catch((error) => console.log(error));
  };
};

// POST
export const postEmployee = (employee) => (dispatch) => {
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employee),
  })
    .then((res) => handleErrors(res, dispatch))
    .then((res) => res.json())
    .then((data) => dispatch(addEmployeeState(data)))
    .catch(catchErrors);
};

// PUT
export const putEmployee = (employee) => (dispatch) => {
  fetch(baseUrl + `/${employee.idEmployee}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employee),
  })
    .then((res) => handleErrors(res, dispatch))
    .then(() => dispatch(updateEmployeeState(employee)))
    .catch(catchErrors);
};

// DELETE
export const deleteEmployee = (id) => (dispatch) => {
  fetch(baseUrl + '/' + id, { method: 'DELETE' })
    .then((res) => handleErrors(res, dispatch))
    .then(() => dispatch(deleteEmployeeState(id)))
    .catch(catchErrors);
};

const handleErrors = (response, dispatch) => {
  if (!response.ok) {
    if (response?.status === 401) {
      dispatch(logout());
    }

    throw response;
  }
  return response;
};

const catchErrors = (error) => {
  try {
    error
      .json()
      .then((body) =>
        console.log(
          `Server error: [${body.status} ${body.statusText ?? ''} ${
            body.detail ?? ''
          }]`
        )
      );
  } catch (error) {
    console.log(error);
  }
};
