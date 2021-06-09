import * as devicesAT from './devices.action-types';

const initialState = [];

export default function devicesReducer(state = initialState, action) {
  switch (action.type) {
    case devicesAT.SET_DEVICES: {
      return action.payload;
    }
    case devicesAT.ADD_DEVICE: {
      return [action.payload, ...state];
    }
    case devicesAT.UPDATE_DEVICE: {
      return state.map((device) =>
        device.id === action.payload.id ? action.payload : device
      );
    }
    case devicesAT.DELETE_DEVICE: {
      return state.filter((device) => device.id !== action.payload);
    }
    default:
      return state;
  }
}
