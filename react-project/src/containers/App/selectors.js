/**
 * App selectors
 */

import { createSelector } from 'reselect';
import uniq from 'lodash/uniq';
import { initialState } from './reducer';

const selectApp = state => state.app || initialState;
 
const selectEntities = createSelector(
  selectApp,
  state => {
    let { entities } = state.items;
    if (!entities && !state.items) {
      return [];
    }
    if (!entities) {
      return [];
    }
    console.log('entities', entities)
    return entities;
  }
);

const makeSelectIsFetching = () =>
  createSelector(
    selectApp,
    state => state.isFetching
  );

const makeSelectIsFetched = () =>
  createSelector(
    selectApp,
    state => state.isFetched
  );

const makeSelectRocketItems = () =>
  createSelector(
    selectEntities,
    state => {
      let { rocketItems } = state;
      if (!rocketItems) {
        return [];
      }

      return Object.values(rocketItems);
    }
  );

const makeSelectLaunchpadItems = () =>
  createSelector(
    selectEntities,
    state => {
      let { launchPadItems } = state;
      if (!launchPadItems) {
        return [];
      }

      return Object.values(launchPadItems);
    }
  );

const makeSelectRocketYearsItem = () =>
  createSelector(
    selectEntities,
    state => {
      let { rocketYears } = state;
      if (!rocketYears) {
        return [];
      }

      return uniq(Object.values(rocketYears));
    }
  );

export { 
  selectApp, 
  makeSelectRocketItems,
  makeSelectLaunchpadItems,
  makeSelectRocketYearsItem,
  makeSelectIsFetching,
  makeSelectIsFetched
};
