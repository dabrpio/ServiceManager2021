import { FEATURE_STATS_NAME } from '../../constants';

const decorateAT = (text) => `[${FEATURE_STATS_NAME}] ${text}`;

export const SET_COUNT_STATS = decorateAT('Set stats - count');
export const SET_PROFIT_STATS = decorateAT('Set stats - profit');
export const SET_TOP_BRANDS_STATS = decorateAT('Set stats - top brands');
export const RESET_STATS = decorateAT('Reset stats');
