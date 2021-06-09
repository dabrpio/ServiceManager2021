import * as ticketsAT from './tickets.action-types';

const initialState = [];

export default function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case ticketsAT.SET_TICKETS: {
      return action.payload;
    }
    case ticketsAT.ADD_TICKET: {
      return [action.payload, ...state];
    }
    case ticketsAT.UPDATE_TICKET: {
      return state.map((ticket) =>
        ticket.rma === action.payload.rma ? action.payload : ticket
      );
    }
    case ticketsAT.DELETE_TICKET: {
      return state.filter((ticket) => ticket.rma !== action.payload);
    }
    default:
      return state;
  }
}
