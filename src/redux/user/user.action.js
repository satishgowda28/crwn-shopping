import userActionTypes from './user.actiontypes';


export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSiginStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START
});
export const emailSiginStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword
});

export const siginSuccess = (user) => ({
  type: userActionTypes.SIGNIN_SUCCESS,
  payload: user
});
export const siginFail = (error) => ({
  type: userActionTypes.SIGNIN_FAIL,
  payload: error
});

export const checkuserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION
});

export const signoutStart = () => ({
  type: userActionTypes.SIGN_OUT_START
});
export const signoutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS
});
export const signoutFail = (error) => ({
  type: userActionTypes.SIGN_OUT_FAIL,
  payload: error
});
export const signupstart = ({email, password, displayName}) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: {email, password, displayName}
});
export const signupsuccess = ({user, additionalData}) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: {user, additionalData}
});
export const signupfail = (error) => ({
  type: userActionTypes.SIGN_UP_FAIL,
  payload: error
});
