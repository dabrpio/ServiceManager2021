import { FEATURE_TICKETS_NAME } from '../../constants';

const decorateAT = (text) => `[${FEATURE_TICKETS_NAME}] ${text}`;

export const SET_TICKETS = decorateAT('Set tickets');
export const ADD_TICKET = decorateAT('Add ticket');
export const UPDATE_TICKET = decorateAT('Update ticket');
export const DELETE_TICKET = decorateAT('Delete ticket');
export const UPDATE_TICKET_PUT_CLIENT = decorateAT(
  'Update ticket (client update)'
);
