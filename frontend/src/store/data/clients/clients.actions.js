import * as clientsAT from './clients.action-types';

const baseUrl = `https://localhost:5001/api/klienci`;

const setClientsState = (data) => ({
  type: clientsAT.SET_CLIENTS,
  payload: data,
});

const addClientState = (client) => ({
  type: clientsAT.ADD_CLIENT,
  payload: client,
});

const updateClientState = (client) => ({
  type: clientsAT.UPDATE_CLIENT,
  payload: client,
});

const deleteClientState = (id) => ({
  type: clientsAT.DELETE_CLIENT,
  payload: id,
});

// GET
export const fetchClients = () => {
  return (dispatch) => {
    fetch(baseUrl)
      .then(handleErrors)
      .then((res) => res.json())
      .then((data) => dispatch(setClientsState(data)))
      .catch(catchErrors);
  };
};

// POST
export const postClient = (client) => (dispatch) => {
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nrTel: parseInt(client.nrTel),
      nip: parseInt(client.nip),
      ...client,
    }),
  })
    .then(handleErrors)
    .then((res) => res.json())
    .then((client) => dispatch(addClientState(client)))
    .catch(catchErrors);
};

// PUT
export const putClient = (client) => (dispatch) => {
  fetch(baseUrl + `/${client.idKlienta}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nrTel: parseInt(client.nrTel),
      nip: parseInt(client.nip),
      ...client,
    }),
  })
    .then(handleErrors)
    .then(() => dispatch(updateClientState(client)))
    .catch(catchErrors);
};

// DELETE
export const deleteClient = (id) => (dispatch) => {
  fetch(baseUrl + '/' + id, { method: 'DELETE' })
    .then(handleErrors)
    .then(() => dispatch(deleteClientState(id)))
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
