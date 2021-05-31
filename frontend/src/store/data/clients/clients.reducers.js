import * as clientsAT from './clients.action-types';

const initialState = [];

export default function clientsReducer(state = initialState, action) {
  switch (action.type) {
    case clientsAT.SET_CLIENTS: {
      return action.payload;
    }
    default:
      return state;
  }
}
