import * as ticketsAT from './tickets.action-types';

const baseUrl = `https://localhost:5001/api/zlecenia`;

export const fetchTickets = () => {
  return (dispatch) => {
    fetch(baseUrl + '/top25')
      .then((res) => res.json())
      .then((data) => dispatch(setTickets(data)));
  };
};

const setTickets = (value) => ({
  type: ticketsAT.SET_TICKETS,
  payload: value,
});

const fetchTicket = (id) => (dispatch) => {
  fetch(`${baseUrl}/${id}`)
    .then((res) => res.json())
    .then((data) => dispatch(setTicket(data)));
};

const setTicket = (value) => ({
  type: ticketsAT.SET_TICKET,
  payload: value,
});

export const postTicket = (data) => (dispatch, getState) => {
  const ticketCount = getState().data.tickets.length;
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
    .then(() => dispatch(fetchTicket(ticketCount + 1)))
    .catch((error) => console.log(error));
};
