import * as statsAT from './stats.action-types';
import { URL } from '../../../constants';

const baseUrl = `${URL}/statistics`;

const setCountStatsState = (data) => ({
  type: statsAT.SET_COUNT_STATS,
  payload: data,
});

const setProfitStatsState = (data) => ({
  type: statsAT.SET_PROFIT_STATS,
  payload: data,
});

const setTopBrandsStatsState = (data) => ({
  type: statsAT.SET_TOP_BRANDS_STATS,
  payload: data,
});

const fetchCountStats = (endpoint) => (dispatch) => {
  fetch(baseUrl + endpoint)
    .then(handleErrors)
    .then((res) => res.json())
    .then((data) => dispatch(setCountStatsState(data)))
    .catch(catchErrors);
};

const fetchProfitStats = (endpoint) => (dispatch) => {
  fetch(baseUrl + endpoint)
    .then(handleErrors)
    .then((res) => res.json())
    .then((data) => dispatch(setProfitStatsState(data)))
    .catch(catchErrors);
};

const fetchTopBrandsStats = (endpoint) => (dispatch) => {
  fetch(baseUrl + endpoint)
    .then(handleErrors)
    .then((res) => res.json())
    .then((data) => dispatch(setTopBrandsStatsState(data)))
    .catch(catchErrors);
};

export const fetchStats = () => (dispatch) => {
  dispatch(fetchCountStats('/count/31'));
  dispatch(fetchProfitStats('/profit/31'));
  // dispatch(fetchTopBrandsStats('/topbrands'))
};

const handleErrors = (response) => {
  console.log(response);
  if (!response.ok) {
    throw response;
  }
  return response;
};

const catchErrors = (error) => {
  try {
    error
      .json()
      .then((body) =>
        console.log(
          `Server error: [${body.status} ${body.statusText ?? ''} ${
            body.detail ?? ''
          }]`
        )
      );
  } catch (error) {
    console.log(error);
  }
};
