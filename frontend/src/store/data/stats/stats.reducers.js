import * as statsAT from './stats.action-types';

const initialState = {
  count: [],
  profit: [],
  topBrands: [],
};

export default function statsReducer(state = initialState, action) {
  switch (action.type) {
    case statsAT.SET_COUNT_STATS: {
      return {
        ...state,
        count: action.payload,
      };
    }
    case statsAT.SET_PROFIT_STATS: {
      return {
        ...state,
        profit: action.payload,
      };
    }
    case statsAT.SET_TOP_BRANDS_STATS: {
      return {
        ...state,
        topBrands: action.payload,
      };
    }
    default:
      return state;
  }
}
