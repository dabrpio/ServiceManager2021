import * as clientsAT from './clients.action-types';

const baseUrl = `https://localhost:5001/api/klienci`;

export const fetchClients = () => {
  return (dispatch) => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => dispatch(setClients(data)));
  };
};

const setClients = (value) => ({
  type: clientsAT.SET_CLIENTS,
  payload: value,
});

export const postClient = (data) => (dispatch) => {
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      nrTel: parseInt(data.nrTel),
      nip: parseInt(data.nip),
    }),
  })
    .then((res) => res.json())
    .then(() => dispatch(fetchClients()))
    .catch((error) => console.log(error));
};
