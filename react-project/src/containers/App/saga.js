/**
 * Gets the repositories of the user from Github
 */

import { call, put, all, takeLatest, delay } from 'redux-saga/effects';
import request from 'utils/request';
import { APP_ITEMS_REQUEST } from './actionTypes';
import normalized from './schemas';
import {
  updateItems,
  itemsLoadingError
} from './actions';

/**
 * Request/response handler
 */
export function* getItems() {
  console.log('getItems')
  const launchesItemsRequestURL = process.env.REACT_APP_API_LAUNCHES;
  const launchPadsRequestURL = process.env.REACT_APP_API_LAUNCHPADS;

  try {
     
    const [ rocketItems, launchPadItems ] =  yield all([
      call(request, launchesItemsRequestURL), 
      call(request, launchPadsRequestURL)
    ]);

    const items = normalized({
      rocketItems, 
      launchPadItems,
      rocketYears: rocketItems,
    });
    yield delay(2000)
    yield put(updateItems(items));
  } catch (err) {
    yield put(itemsLoadingError(err.message));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* root() {
	// Watches for APP_ITEMS_REQUEST actions and calls getItems when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	yield takeLatest(APP_ITEMS_REQUEST, getItems);
}
