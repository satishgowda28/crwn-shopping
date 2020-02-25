import {createSelector} from 'reselect';

const shopSelector = state => state.shop;

export const collectionSelector = createSelector(
  [shopSelector],
  shop => shop.collections
);

export const collArraySelector = createSelector(
  [collectionSelector],
  collections => Object.keys(collections).map(key => collections[key])
);

export const collectionProductSelector = (routeName) => createSelector(
  [collectionSelector],
  collections => collections[routeName]
)
