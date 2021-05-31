import { FEATURE_CLIENTS_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

export const selectClientsState = (state) =>
  selectDataState(state)[FEATURE_CLIENTS_NAME];
