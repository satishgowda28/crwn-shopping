import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {selectCartHide} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {signoutStart} from '../../redux/user/user.action';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.style.scss';

const Header = ({currentUser, hideCartDropdown, signoutStart}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>
    <div className="options">
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/shop'>CONTACT</Link>
      {
        currentUser ?
        <div className='option' onClick={signoutStart}>SIGN OUT</div> : 
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {
      hideCartDropdown ?
      null:
      <CartDropdown />
    }
  </div>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hideCartDropdown: selectCartHide
});
const mapDispatchToProps = dispatch => ({
  signoutStart: () => dispatch(signoutStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);