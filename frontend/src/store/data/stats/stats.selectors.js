import { FEATURE_STATS_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

export const selectStatsState = (state) =>
  selectDataState(state)[FEATURE_STATS_NAME];
