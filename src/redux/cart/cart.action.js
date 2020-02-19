import {cartActionTypes} from './cart.actiontypes';

export const toggleCartDropdown = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN
})

export const addCartItem = (item) => ({
  type: cartActionTypes.ADD_ITEMTO_CART,
  payload: item
});