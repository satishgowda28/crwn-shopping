import {takeEvery} from 'redux-saga/effects';

import ShopActionTypes from './shop.actiontypes';

export function* fetchCollectionAsync() {
  yield console.log('im fired');

}

export function* fetchCollectionStart() {
  yield takeEvery(ShopActionTypes.COLLECTION_FETCH_START, fetchCollectionAsync)
}