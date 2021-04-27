import * as ticketsAT from './tickets.action-types';

export const fetchTickets = () => {
  return (dispatch) => {
    fetch('https://localhost:5001/api/zlecenia')
      .then((res) => res.json())
      .then((data) => dispatch(setTickets(data)));
  };
};

export const setTickets = (value) => ({
  type: ticketsAT.SET_TICKETS,
  payload: value,
});
