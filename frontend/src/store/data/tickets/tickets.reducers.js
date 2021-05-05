import * as ticketsAT from './tickets.action-types';

const initialState = [];

export default function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case ticketsAT.SET_TICKETS: {
      return action.payload;
    }
    case ticketsAT.SET_TICKET: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}
