import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
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
const mapStateToProps = ({cart: {cartItem}}) => ({
  cartItem
})
export default connect(mapStateToProps)(CartDropdown);