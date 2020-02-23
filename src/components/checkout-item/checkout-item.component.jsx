import React from 'react';
import {connect} from 'react-redux';
import {clearCartItem, removeCartItem, addCartItem} from '../../redux/cart/cart.action';

import './checkout-item.style.scss';

const CheckoutItem = ({cartItem: {imageUrl, name, price, quantity}, cartItem, removeCartItem, addItemtoCart}) => (
  <div className='checkout-item'>
    <div className="image-container">
      <img src={imageUrl} alt="item"/>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => removeCartItem(cartItem)}>&#10094;</div>
      <span className="count">{quantity}</span>
      <div className="arrow" onClick={() => addItemtoCart(cartItem)}>&#10095;</div>
    </span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={() => clearCartItem(cartItem)}>&#10005;</div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  clearCartItem: item => dispatch(clearCartItem(item)),
  removeCartItem: item => dispatch(removeCartItem(item)),
  addItemtoCart: item => dispatch(addCartItem(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);