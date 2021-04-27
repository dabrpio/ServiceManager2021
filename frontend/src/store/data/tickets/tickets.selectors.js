import { FEATURE_TICKETS_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

const selectTicketsState = (state) =>
  selectDataState(state)[FEATURE_TICKETS_NAME];

export const selectTickets = (state) => selectTicketsState(state);
