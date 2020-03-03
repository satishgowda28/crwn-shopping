import userActionTypes from './user.actiontypes';


export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSiginStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START
});
export const googleSiginSuccess = (user) => ({
  type: userActionTypes.GOOGLE_SIGNIN_SUCCESS,
  payload: user
});
export const googleSiginFail = (error) => ({
  type: userActionTypes.GOOGLE_SIGNIN_FAIL,
  payload: error
});
export const emailSiginStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword
});
export const emailSiginSuccess = (user) => ({
  type: userActionTypes.EMAIL_SIGNIN_SUCCESS,
  payload: user
});
export const emailSiginFail = (error) => ({
  type: userActionTypes.EMAIL_SIGNIN_FAIL,
  payload: error
});


