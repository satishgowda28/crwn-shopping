import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItem} from '../../redux/cart/cart.selectors';
import {toggleCartDropdown} from '../../redux/cart/cart.action';
import './cart-dropdown.style.scss';


const CartDropdown = ({cartItem,history, dispatch}) => (
  <div className='cart-dropdown'>
    <div className="cart-items">
      {
        cartItem.map((item) => <CartItem key={item.id} item={item}/>)
      }
    </div>
    <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartDropdown())
      }
    }>Go To Checkout</CustomButton>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItem
})
export default withRouter(connect(mapStateToProps)(CartDropdown));