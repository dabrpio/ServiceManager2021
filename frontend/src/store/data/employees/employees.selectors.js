import { FEATURE_EMPLOYEES_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

export const selectTicketsState = (state) =>
  selectDataState(state)[FEATURE_EMPLOYEES_NAME];
