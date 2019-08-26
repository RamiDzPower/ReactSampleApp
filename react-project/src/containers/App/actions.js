import {
  APP_ITEMS_REQUEST,
  APP_ITEMS_SUCCESS, 
  APP_ITEMS_FAILED
} from './actionTypes';

export const getItems = () => ({
  type: APP_ITEMS_REQUEST,
});

export const updateItems = (items) => ({
  type: APP_ITEMS_SUCCESS,
  payload: items,
});

export const itemsLoadingError = (errorMessage) => ({
  type: APP_ITEMS_FAILED,
  payload: errorMessage,
})