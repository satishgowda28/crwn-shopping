import {userActionTypes} from './user.actiontypes';

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
})