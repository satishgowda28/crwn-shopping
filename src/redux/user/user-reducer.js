import userActionTypes from './user.actiontypes';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case userActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case userActionTypes.EMAIL_SIGNIN_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }
    case userActionTypes.SIGN_OUT_FAIL:
      return {
        ...state,
        error: action.payload
      }
    default: 
      return state;
  }
};

export default userReducer;