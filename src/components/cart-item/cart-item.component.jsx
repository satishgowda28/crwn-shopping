import React from 'react';

import './cart-item.style.scss';

const CartITem = ({item: {name, imageUrl, price, quantity}}) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item'/>
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>{quantity} X ${price}</span>
    </div>
  </div>
);

export default CartITem;