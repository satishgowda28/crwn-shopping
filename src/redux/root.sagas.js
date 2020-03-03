import {all, call} from 'redux-saga/effects';
import {fetchCollectionStart} from './shop/shop.sagas';
import {userSaga} from './user/user.sagas';

function* RootSaga () {
  yield all([
    call(fetchCollectionStart),
    call(userSaga)
  ]);
}

export default RootSaga;