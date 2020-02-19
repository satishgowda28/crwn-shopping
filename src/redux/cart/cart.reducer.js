import {cartActionTypes} from './cart.actiontypes';

const INITIAL_STATE = {
  hideCartDropdown: true,
  cartItem: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hideCartDropdown: !state.hideCartDropdown
      };
    case cartActionTypes.ADD_ITEMTO_CART:
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload]
      };
    default: 
      return state;
  }
};

export default cartReducer;