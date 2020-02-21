import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItem} from '../../redux/cart/cart.reselect';
import './cart-dropdown.style.scss';


const CartDropdown = ({cartItem}) => (
  <div className='cart-dropdown'>
    <div className="cart-items">
      {
        cartItem.map((item) => <CartItem key={item.id} item={item}/>)
      }
    </div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItem
})
export default connect(mapStateToProps)(CartDropdown);