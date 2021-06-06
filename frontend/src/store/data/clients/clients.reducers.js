import * as clientsAT from './clients.action-types';

const initialState = [];

export default function clientsReducer(state = initialState, action) {
  switch (action.type) {
    case clientsAT.SET_CLIENTS: {
      return action.payload;
    }
    case clientsAT.ADD_CLIENT: {
      return [...state, action.payload];
    }
    case clientsAT.UPDATE_CLIENT: {
      return state.map((client) =>
        client.idKlienta === action.payload.idKlienta ? action.payload : client
      );
    }
    case clientsAT.DELETE_CLIENT: {
      return state.filter((client) => client.idKlienta !== action.payload);
    }
    default:
      return state;
  }
}
