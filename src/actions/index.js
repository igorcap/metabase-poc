import * as constants from '../constants';

export const fetchMetabase = () => ({
  type: constants.FETCH_METABASE
});

export const fetchMetabaseSucceeded = data => ({
  type: constants.FETCH_METABASE_SUCCEEDED,
  payload: data
});

export const fetchMetabaseFailed = data => ({
  type: constants.FETCH_METABASE_FAILED,
  payload: data
});
