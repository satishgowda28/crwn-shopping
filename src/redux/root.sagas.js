import {all, call} from 'redux-saga/effects';
import {fetchCollectionStart} from './shop/shop.sagas';

function* RootSaga () {
  yield all([
    call(fetchCollectionStart)
  ]);
}

export default RootSaga;