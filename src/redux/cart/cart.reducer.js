import {cartActionTypes} from './cart.actiontypes';
import {addItemToCart, removeItemfromCart} from './cart.utils';

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
        cartItem: addItemToCart(state.cartItem, action.payload)
      };
    case cartActionTypes.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItem: state.cartItem.filter((item) => item.id !== action.payload.id)
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItem: removeItemfromCart(state.cartItem, action.payload)
      }
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItem: []
      }
    default: 
      return state;
  }
};

export default cartReducer;