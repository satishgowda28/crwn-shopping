import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shoppingbag-icon.svg';
import {connect} from 'react-redux';
import {toggleCartDropdown} from '../../redux/cart/cart.action';

import './cart-icon.style.scss';

const CartIcon = ({toggleCartDropdown}) => (
  <div className='cart-icon'>
    <ShoppingIcon className='shopping-icon' onClick={toggleCartDropdown}/>
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
})
export default connect(null, mapDispatchToProps)(CartIcon);