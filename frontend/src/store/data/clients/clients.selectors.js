import { FEATURE_CLIENTS_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

export const selectClientsState = (state) =>
  selectDataState(state)[FEATURE_CLIENTS_NAME]['clients'];

export const selectDeleteClientError = (state) =>
  selectDataState(state)[FEATURE_CLIENTS_NAME]['error'];
