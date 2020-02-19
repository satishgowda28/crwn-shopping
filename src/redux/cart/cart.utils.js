export const addItemToCart = (cartItems, newItem) => {
  const itemInCart = cartItems.find((item) => item.id === newItem.id);
  if(itemInCart) {
    return cartItems.map((item) => item.id === newItem.id ? {...item, quantity: item.quantity + 1}: item)
  }
  return [...cartItems, {...newItem, quantity: 1}];
}

