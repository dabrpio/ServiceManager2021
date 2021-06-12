import { FEATURE_CLIENTS_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

const selectClients = (state) => selectDataState(state)[FEATURE_CLIENTS_NAME];

export const selectClientsState = (state) => selectClients(state)['clients'];

export const selectDeleteError = (state) => selectClients(state)['error'];
