export const addItemToCart = (cartItems, newItem) => {
  const itemInCart = cartItems.find((item) => item.id === newItem.id);
  if(itemInCart) {
    return cartItems.map((item) => item.id === newItem.id ? {...item, quantity: item.quantity + 1}: item)
  }
  return [...cartItems, {...newItem, quantity: 1}];
}

export const removeItemfromCart = (cartItems, removeItem) => {
  const itemInCart = cartItems.find(item => item.id === removeItem.id);
  if(itemInCart.quantity === 1) {
    return cartItems.filter(item => item.id !== removeItem.id);
  }
  return cartItems.map(item => item.id === removeItem.id ? {...item, quantity: item.quantity -1} : item);
};

