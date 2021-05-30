import * as employeesAT from './employees.action-types';

const baseUrl = `https://localhost:5001/api/uzytkownicy`;

export const fetchEmployees = () => {
  return (dispatch) => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => dispatch(setEmployees(data)));
  };
};

const setEmployees = (value) => ({
  type: employeesAT.SET_EMPLOYEES,
  payload: value,
});

export const postEmployee = (data) => (dispatch) => {
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      nrTel: parseInt(data.nrTel),
    }),
  })
    .then((res) => res.json())
    .then(() => dispatch(fetchEmployees()))
    .catch((error) => console.log(error));
};
