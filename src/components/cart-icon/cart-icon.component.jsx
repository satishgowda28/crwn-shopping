import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shoppingbag-icon.svg';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCartItemCount} from '../../redux/cart/cart.selectors';
import {toggleCartDropdown} from '../../redux/cart/cart.action';

import './cart-icon.style.scss';

const CartIcon = ({toggleCartDropdown, cartItemCount}) => (
  <div className='cart-icon'>
    <ShoppingIcon className='shopping-icon' onClick={toggleCartDropdown}/>
<span className='item-count'>{cartItemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});
const mapStateToProps = createStructuredSelector({
  cartItemCount: selectCartItemCount
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);