import * as clientsAT from './clients.action-types';
import { URL } from '../../../constants';
import { clientUpdateTicketState } from '../tickets/tickets.actions';

const baseUrl = `${URL}/clients`;

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
const setDeleteClientError = (error) => ({
  type: clientsAT.SET_DELETE_CLIENT_ERROR,
  payload: error,
});

export const unsetDeleteClientError = () => ({
  type: clientsAT.UNSET_DELETE_CLIENT_ERROR,
});

// GET
export const fetchClients = () => {
  return (dispatch) => {
    fetch(baseUrl)
      .then(handleErrors)
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          setClientsState(data.map(({ rmas, ...keepAttrs }) => keepAttrs))
        );
      })
      .catch((error) => console.log(error));
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
    body: JSON.stringify(client),
  })
    .then(handleErrors)
    .then((res) => res.json())
    .then((client) => dispatch(addClientState(client)))
    .catch(catchErrors);
};

// PUT
export const putClient = (client) => (dispatch) => {
  console.log(client);
  fetch(baseUrl + `/${client.idClient}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(client),
  })
    .then(handleErrors)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch(updateClientState(client));
      dispatch(clientUpdateTicketState(client));
    })
    .catch(catchErrors);
};

// DELETE
export const deleteClient = (id) => (dispatch) =>
  fetch(baseUrl + '/' + id, { method: 'DELETE' })
    .then(handleErrors)
    .then((data) => {
      dispatch(deleteClientState(id));
    })
    .catch((error) =>
      error.json().then((response) => {
        console.log(response);
        if (response.detail === 'Nie usunięto zleceń klienta')
          dispatch(setDeleteClientError(error.url.slice(error.url.length - 3)));
      })
    );

const handleErrors = (response) => {
  console.log(response);
  if (!response.ok) {
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
