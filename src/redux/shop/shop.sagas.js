import {takeEvery, call, put} from 'redux-saga/effects';

import ShopActionTypes from './shop.actiontypes';

import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.action'

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collection');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap,snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap))
  }
  catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

}

export function* fetchCollectionStart() {
  yield takeEvery(ShopActionTypes.COLLECTION_FETCH_START, fetchCollectionAsync)
}