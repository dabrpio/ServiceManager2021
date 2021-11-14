import * as employeesAT from './employees.action-types';
import { URL } from '../../constants';

const baseUrl = `${URL}/api/users`;

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
      .then(handleErrors)
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
    body: JSON.stringify({
      nrTel: parseInt(employee.nrTel),
      ...employee,
    }),
  })
    .then(handleErrors)
    .then((res) => res.json())
    .then((data) => dispatch(addEmployeeState(data)))
    .catch(catchErrors);
};

// PUT
export const putEmployee = (employee) => (dispatch) => {
  fetch(baseUrl + `/${employee.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nrTel: parseInt(employee.nrTel),
      ...employee,
    }),
  })
    .then(handleErrors)
    .then(() => dispatch(updateEmployeeState(employee)))
    .catch(catchErrors);
};

// DELETE
export const deleteEmployee = (id) => (dispatch) => {
  fetch(baseUrl + '/' + id, { method: 'DELETE' })
    .then(handleErrors)
    .then(() => dispatch(deleteEmployeeState(id)))
    .catch(catchErrors);
};

const handleErrors = (response) => {
  if (!response.ok) {
    throw response;
  }
  return response;
};

const catchErrors = (error) =>
  error
    .json()
    .then((body) =>
      console.log(
        `Server error: [${body.status} ${body.statusText ?? ''} ${
          body.detail ?? ''
        }]`
      )
    );
