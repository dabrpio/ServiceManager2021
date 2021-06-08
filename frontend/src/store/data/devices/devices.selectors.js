import { FEATURE_DEVICES_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

export const selectDevicesState = (state) =>
  selectDataState(state)[FEATURE_DEVICES_NAME];
