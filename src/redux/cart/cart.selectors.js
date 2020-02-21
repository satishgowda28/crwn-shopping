import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
  [selectCart],
  (cart) => cart.cartItem
);

export const selectCartItemCount = createSelector(
  [selectCartItem],
  cartItem => cartItem.reduce((currentItems, item) => currentItems += item.quantity,0)
);

export const selectCartTotal = createSelector(
  [selectCartItem],
  cartItem => cartItem.reduce((total, item) => total += (item.quantity * item.price), 0)
)

export const selectCartHide = createSelector(
  [selectCart],
  (cart) => cart.hideCartDropdown
);


