import { all } from 'redux-saga/effects';

import appSaga from 'containers/App/saga';

export default function* root() {
  yield all([
    appSaga(),
  ])
}