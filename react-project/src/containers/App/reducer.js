import defaultState from 'utils/defaultState';
import {
  APP_ITEMS_REQUEST,
  APP_ITEMS_SUCCESS,
  APP_ITEMS_FAILED
} from './actionTypes'
export const initialState = defaultState;

/* eslint-disable default-case, no-param-reassign */
export default (state = initialState, action) => {
	switch (action.type) {
    case APP_ITEMS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case APP_ITEMS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isFetched: true,
        items: action.payload,
      });
    case APP_ITEMS_FAILED:
      return Object.assign({}, initialState, {
        isFailed: {
          status: true,
          message: action.payload,
        },
      });
		default:
			return state;
	}
};

