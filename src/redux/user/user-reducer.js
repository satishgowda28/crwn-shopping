import userActionTypes from './user.actiontypes';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case userActionTypes.EMAIL_SIGNIN_SUCCESS:
    case userActionTypes.GOOGLE_SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case userActionTypes.GOOGLE_SIGNIN_FAIL:
    case userActionTypes.EMAIL_SIGNIN_FAIL:
      return {
        ...state,
        error: action.payload
      }
    default: 
      return state;
  }
};

export default userReducer;