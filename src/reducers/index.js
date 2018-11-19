import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import metabaseReducer from './metabaseReducers';

export default combineReducers({
  routing: routerReducer,
  metabaseReducer
});
