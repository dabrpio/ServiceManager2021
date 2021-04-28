import * as ticketsAT from './tickets.action-types';

export const fetchTickets = () => {
  return (dispatch) => {
    fetch('https://localhost:5001/api/zlecenia')
      .then((res) => res.json())
      .then((data) => dispatch(setTickets(data)));
  };
};

const setTickets = (value) => ({
  type: ticketsAT.SET_TICKETS,
  payload: value,
});

export const postTicket = (data) => {
  return (dispatch, getState) => {
    const ticketCount = getState().data.tickets.length;
    fetch('https://localhost:5001/api/zlecenia', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        rma: ticketCount + 1,
        dataPrzyjecia: '2021-01-07',
        kosztNaprawy: parseFloat(data.kosztNaprawy),
        kosztCzesci: parseFloat(data.kosztCzesci),
        nrTel: parseInt(data.nrTel),
      }),
    })
      .then((res) => res.json())
      .then(() => dispatch(fetchTickets()))
      .catch((data) => console.log(data));
    // console.log(data, {
    //   ...data,
    //   rma: ticketCount + 1,
    //   dataPrzyjecia: '1-07-2021',
    //   kosztNaprawy: parseFloat(data.kosztNaprawy),
    //   kosztCzesci: parseFloat(data.kosztCzesci),
    //   nrTel: parseInt(data.nrTel),
    // });
  };
};
