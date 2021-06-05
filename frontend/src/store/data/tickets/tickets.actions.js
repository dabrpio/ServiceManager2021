import * as ticketsAT from './tickets.action-types';

const baseUrl = `https://localhost:5001/api/zlecenia`;

const setTicketsState = (value) => ({
  type: ticketsAT.SET_TICKETS,
  payload: value,
});

const updateTicketState = (ticket) => ({
  type: ticketsAT.UPDATE_TICKET,
  payload: ticket,
});

const deleteTicketState = (id) => ({
  type: ticketsAT.DELETE_TICKET,
  payload: id,
});

export const fetchTickets = () => {
  return (dispatch) => {
    fetch(baseUrl + '/top25')
      .then((res) => res.json())
      .then((data) => dispatch(setTicketsState(data)));
  };
};

export const putTicket = (ticket) => (dispatch) => {
  fetch(baseUrl + `/${ticket.rma}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      kosztNaprawy: parseFloat(ticket.kosztNaprawy),
      kosztCzesci: parseFloat(ticket.kosztCzesci),
      nrTel: parseInt(ticket.nrTel),
      ...ticket,
    }),
  })
    .then((it) => {
      if (!it.ok) {
        throw `Server error: [${it.status}] [${it.statusText}] [${it.url}]`;
      }
      return it;
    })
    .then(() => dispatch(updateTicketState(ticket)))
    .catch((error) => console.log(error));
};

export const deleteTicket = (id) => (dispatch) => {
  fetch(baseUrl + '/' + id, { method: 'DELETE' })
    .then((it) => {
      if (!it.ok) {
        throw `Server error: [${it.status}] [${it.statusText}] [${it.url}]`;
      }
      return it;
    })
    .then(() => dispatch(deleteTicketState(id)))
    .catch((error) => console.log(error));
};

export const postTicket = (data) => (dispatch) => {
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      kosztNaprawy: parseFloat(data.kosztNaprawy),
      kosztCzesci: parseFloat(data.kosztCzesci),
      nrTel: parseInt(data.nrTel),
    }),
  })
    .then((res) => res.json())
    .then(() => dispatch(fetchTickets()))
    .catch((error) => console.log(error));
};
