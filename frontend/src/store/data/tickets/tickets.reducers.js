import * as ticketsAT from './tickets.action-types';

const initialState = [];

export default function ticketsReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case ticketsAT.SET_TICKETS: {
      return payload;
    }
    case ticketsAT.ADD_TICKET: {
      return [payload, ...state];
    }
    case ticketsAT.UPDATE_TICKET: {
      return state.map((ticket) =>
        ticket.rma === payload.rma ? payload : ticket
      );
    }
    case ticketsAT.UPDATE_TICKET_PUT_CLIENT: {
      return state.map((ticket) =>
        ticket.idClient === payload.idClient
          ? { ...ticket, ...payload }
          : ticket
      );
    }
    case ticketsAT.DELETE_TICKET: {
      return state.filter((ticket) => ticket.rma !== payload);
    }
    default:
      return state;
  }
}
