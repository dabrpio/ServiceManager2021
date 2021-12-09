import { FEATURE_DEVICES_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

export const selectDeviceBrandsState = (state) =>
  selectDataState(state)[FEATURE_DEVICES_NAME]['brands'];

export const selectDeviceModelsState = (state) =>
  selectDataState(state)[FEATURE_DEVICES_NAME]['models'];

export const selectDeleteDeviceError = (state) =>
  selectDataState(state)[FEATURE_DEVICES_NAME]['error'];
