import React from 'react';
import {connect} from 'react-redux';
import {removeCartItem} from '../../redux/cart/cart.action';

import './checkout-item.style.scss';

const CheckoutItem = ({cartItem: {imageUrl, name, price, quantity}, cartItem, removeCartItem}) => (
  <div className='checkout-item'>
    <div className="image-container">
      <img src={imageUrl} alt="item"/>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={() => removeCartItem(cartItem)}>&#10005;</div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  removeCartItem: (item) => dispatch(removeCartItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);