import { takeLatest, put } from 'redux-saga/effects';

import * as constants from '../../constants';
import * as actions from '../../actions';

const jwt = require("jsonwebtoken");

function* workerMetabaseSaga() {
  const payload = {
    resource: { question: 5 },
    params: {}
  };
  const token = jwt.sign(payload, process.env.REACT_APP_API_KEY)
  console.log(token)
  yield put(actions.fetchMetabaseSucceeded(token));
}

export default function* watchMetabase() {
  yield takeLatest(constants.FETCH_METABASE, workerMetabaseSaga);
}