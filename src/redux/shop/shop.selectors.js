import {createSelector} from 'reselect';

const shopSelector = state => state.shop;

export const collectionSelector = createSelector(
  [shopSelector],
  shop => shop.collections
);
