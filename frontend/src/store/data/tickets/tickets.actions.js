import { URL } from '../../../constants';
import { handleResponse, createHeaders } from '../../utils';
import * as ticketsAT from './tickets.action-types';

const baseUrl = `${URL}/tickets`;

const setTicketsState = (data) => ({
  type: ticketsAT.SET_TICKETS,
  payload: data,
});

const addTicketState = (ticket) => ({
  type: ticketsAT.ADD_TICKET,
  payload: ticket,
});

const updateTicketState = (ticket) => ({
  type: ticketsAT.UPDATE_TICKET,
  payload: ticket,
});

export const clientUpdateTicketState = (client) => ({
  type: ticketsAT.UPDATE_TICKET_PUT_CLIENT,
  payload: client,
});

const deleteTicketState = (id) => ({
  type: ticketsAT.DELETE_TICKET,
  payload: id,
});

export const resetTicketsState = () => ({
  type: ticketsAT.RESET_TCIKETS,
});

// GET
export const fetchTickets = () => {
  return (dispatch) => {
    fetch(baseUrl, { headers: createHeaders() })
      .then((res) => handleResponse(res, dispatch))
      .then((res) => res.json())
      .then((data) => dispatch(setTicketsState(data)))
      .catch((error) => console.log(error));
  };
};

// GET [business client]
export const fetchTicketsBusinessClient = (idCompany) => {
  return (dispatch) => {
    fetch(`${baseUrl}/biz/${idCompany}`, { headers: createHeaders() })
      .then((res) => handleResponse(res, dispatch))
      .then((res) => res.json())
      .then((data) => dispatch(setTicketsState(data)))
      .catch((error) => console.log(error));
  };
};

// POST
export const postTicket = (data) => (dispatch, getState) => {
  const state = getState();

  const ticket = {
    repairCost: parseFloat(data.repairCost),
    partsCost: parseFloat(data.partsCost),
    ...data,
  };

  if (state.auth.userInfo.idCompany)
    Object.assign(ticket, { idCompany: state.auth.userInfo.idCompany });
  else Object.assign(ticket, { idCompany: 1 });

  fetch(baseUrl, {
    method: 'POST',
    headers: createHeaders(),
    body: JSON.stringify(ticket),
  })
    .then((res) => handleResponse(res, dispatch))
    .then((res) => res.json())
    .then((ticket) => dispatch(addTicketState(ticket)))
    .catch(catchErrors);
};

// PUT
export const putTicket = (ticket) => (dispatch) => {
  fetch(baseUrl + `/${ticket.rma}`, {
    method: 'PUT',
    headers: createHeaders(),
    body: JSON.stringify({
      repairCost: parseFloat(ticket.repairCost),
      partsCost: parseFloat(ticket.partsCost),
      ...ticket,
    }),
  })
    .then((res) => handleResponse(res, dispatch))
    .then((res) => res.json())
    .then((data) => dispatch(updateTicketState(data)))
    .catch(catchErrors);
};

// DELETE
export const deleteTicket = (id) => (dispatch) => {
  fetch(baseUrl + '/' + id, { method: 'DELETE', headers: createHeaders() })
    .then((res) => handleResponse(res, dispatch))
    .then(() => dispatch(deleteTicketState(id)))
    .catch(catchErrors);
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
