import * as statsAT from './stats.action-types';

const emptyData = () => {
  const date = new Date(Date.now());
  const key = `${date.getFullYear()}.${date.getMonth() + 1}`;
  return [
    { value: 0, month: key },
    { value: 0, month: key },
    { value: 0, month: key },
    { value: 0, month: key },
    { value: 0, month: key },
    { value: 0, month: key },
    { value: 0, month: key },
    { value: 0, month: key },
    { value: 0, month: key },
    { value: 0, month: key },
    { value: 0, month: key },
    { value: 0, month: key },
  ];
};

const initialState = {
  count: emptyData(),
  profit: emptyData(),
  topBrands: [],
};

const formatData = (data) => {
  const firstTrasform = data.reduce((obj, item) => {
    const date = new Date(item.beginDate);
    const key = `${date.getFullYear()}.${date.getMonth() + 1}`;
    return {
      ...obj,

      [key]: obj[key] ? obj[key] + item.profit : item.profit,
    };
  }, {});

  const secondTransform = Object.keys(firstTrasform).map((key) => ({
    [`month`]: key,
    [`value`]: firstTrasform[key],
  }));

  return secondTransform.sort(
    (a, b) => a.month.substring(2, 5) < b.month.substring(2, 5)
  );
};

export default function statsReducer(state = initialState, action) {
  switch (action.type) {
    case statsAT.SET_COUNT_STATS: {
      return {
        ...state,
        count: formatData(action.payload),
      };
    }
    case statsAT.SET_PROFIT_STATS: {
      return {
        ...state,
        profit: formatData(action.payload),
      };
    }
    case statsAT.SET_TOP_BRANDS_STATS: {
      return {
        ...state,
        topBrands: action.payload,
      };
    }
    case statsAT.RESET_STATS: {
      return initialState;
    }
    default:
      return state;
  }
}
