import {cartActionTypes} from './cart.actiontypes';

export const toggleCartDropdown = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN
})

export const addCartItem = (item) => ({
  type: cartActionTypes.ADD_ITEMTO_CART,
  payload: item
});

export const clearCartItem = (item) => ({
  type: cartActionTypes.CLEAR_CART_ITEM,
  payload: item
});

export const removeCartItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART
})