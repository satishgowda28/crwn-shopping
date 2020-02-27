import ShopActionType from './shop.actiontypes';

export const updateShopCollection = (collections) => ({
  type: ShopActionType.UPDATE_COLLECTION,
  payload: collections
})