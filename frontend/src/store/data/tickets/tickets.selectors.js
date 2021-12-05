import { FEATURE_TICKETS_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

export const selectTicketsState = (state) =>
  selectDataState(state)[FEATURE_TICKETS_NAME];

export const selectDoneTicketsState = (state) => selectTicketsState(state); //.filter((t) => t.status === 'accepted');
