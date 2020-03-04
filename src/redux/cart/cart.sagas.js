import {takeLatest, all, call, put} from 'redux-saga/effects';
import userActiontypes from '../user/user.actiontypes';
import {clearCart} from './cart.action';

export function* clearCartProcess() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActiontypes.SIGN_OUT_SUCCESS, clearCartProcess)
}

export function* cartSaga() {
  yield all([
    call(onSignOutSuccess)
  ]);
}