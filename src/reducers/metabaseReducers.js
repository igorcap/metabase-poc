import * as constants from '../constants';

const initialState = {
  baseUrl: 'http://localhost:13188',
  loading: false,
};


export default function setMetabaseInfo(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_METABASE:
      return {
        ...state,
        loading: true
      };
    case constants.FETCH_METABASE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        metabase: action.payload
      };
    case constants.FETCH_METABASE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

