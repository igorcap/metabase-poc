
import { all, fork } from 'redux-saga/effects';

import watchMetabase from './watchers/metabaseSaga';

export default function* root() {
  yield all([
    fork(watchMetabase),
  ]);
}
