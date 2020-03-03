import {takeLatest, put, all, call} from 'redux-saga/effects';
import userActionTypes from './user.actiontypes';
import {googleSiginSuccess, googleSiginFail, emailSiginFail, emailSiginSuccess} from './user.action';
import {auth,googleProvider, createUserProfileDocument} from '../../firebase/firebase.utils';

export function* sigInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userData = yield userRef.get();
    yield put(googleSiginSuccess({id: userData.id, ...userData.data()}));
  } catch(error) {
    yield put(googleSiginFail(error));
  }
}
export function* onGoogleSiginStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, sigInWithGoogle)
}

export function* singinWithEmail({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userData = yield userRef.get();
    yield put(emailSiginSuccess({id: userData.id, ...userData.data()}));
  }catch(error) {
    yield put(emailSiginFail(error));
  }
}
export function* onSiginWithEmail() {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, singinWithEmail)
}


export function* userSaga() {
  yield all([
    call(onGoogleSiginStart),
    call(onSiginWithEmail)
  ]);
}