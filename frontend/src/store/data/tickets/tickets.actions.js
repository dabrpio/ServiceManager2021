import * as ticketsAT from './tickets.action-types';

const baseUrl = `https://localhost:5001/api/zlecenia`;

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

const deleteTicketState = (id) => ({
  type: ticketsAT.DELETE_TICKET,
  payload: id,
});

// GET
export const fetchTickets = () => {
  return (dispatch) => {
    fetch(baseUrl)
      .then(handleErrors)
      .then((res) => res.json())
      .then((data) => dispatch(setTicketsState(data)))
      .catch((error) => console.log(error));
  };
};

// POST
export const postTicket = (data) => (dispatch) => {
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      kosztNaprawy: parseFloat(data.kosztNaprawy),
      kosztCzesci: parseFloat(data.kosztCzesci),
      nrTel: parseInt(data.nrTel),
      ...data,
    }),
  })
    .then(handleErrors)
    .then((res) => res.json())
    .then((ticket) => dispatch(addTicketState(ticket)))
    .catch(catchErrors);
};

// PUT
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
    .then(handleErrors)
    .then(() => dispatch(updateTicketState(ticket)))
    .catch(catchErrors);
};

// DELETE
export const deleteTicket = (id) => (dispatch) => {
  fetch(baseUrl + '/' + id, { method: 'DELETE' })
    .then(handleErrors)
    .then(() => dispatch(deleteTicketState(id)))
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
