import { FEATURE_DEVICES_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

export const selectDeviceTypesState = (state) =>
  selectDataState(state)[FEATURE_DEVICES_NAME]['types'];

export const selectDeviceBrandsState = (state) =>
  selectDataState(state)[FEATURE_DEVICES_NAME]['brands'];

export const selectDeviceModelsState = (state) =>
  selectDataState(state)[FEATURE_DEVICES_NAME]['models'];
