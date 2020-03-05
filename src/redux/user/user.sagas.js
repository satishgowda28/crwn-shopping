import {takeLatest, put, all, call} from 'redux-saga/effects';
import userActionTypes from './user.actiontypes';
import {siginSuccess, siginFail, signoutFail, signoutSuccess, signupfail, signupsuccess} from './user.action';
import {auth,googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userData = yield userRef.get();
    yield put(siginSuccess({id: userData.id, ...userData.data()}));
  }catch(error) {
    yield put(siginFail(error));
  }
}
export function* sigInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch(error) {
    yield put(siginFail(error));
  }
}
export function* singinWithEmail({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  }catch(error) {
    yield put(siginFail(error));
  }
}

export function* isUserAunthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if(!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  }catch(error) {
    yield put(siginFail(error));
  }
}
export function* signOutProcess() {
  try {
    yield auth.signOut();
    yield put(signoutSuccess())
  }catch(error) {
    yield put(signoutFail(error));
  }
}
export function* signUpProcess({payload: {email, password,displayName}}) {
  try {
    const user = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signupsuccess({user, additionalData: displayName}))
  }catch(error) {
    yield put(signupfail(error));
  }
}
export function* signInOnSignUp({payload: {user, additionalData}}) {
  yield getSnapshotFromUserAuth(user, additionalData)
}
export function* onGoogleSiginStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, sigInWithGoogle)
}
export function* onSiginWithEmail() {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, singinWithEmail)
}
export function* onUserSessionCheck() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAunthenticated)
}
export function* onSigOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOutProcess)
}
export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpProcess)
}
export function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInOnSignUp)
}


export function* userSaga() {
  yield all([
    call(onGoogleSiginStart),
    call(onSiginWithEmail),
    call(onUserSessionCheck),
    call(onSigOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}