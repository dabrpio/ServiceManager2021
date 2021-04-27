import { FEATURE_TICKETS_NAME } from '../../constants';

const decorateAT = (text) => `[${FEATURE_TICKETS_NAME}] ${text}`;

export const FETCH_TICKETS = decorateAT('Fetch tickets');
export const SET_TICKETS = decorateAT('Set tickets');