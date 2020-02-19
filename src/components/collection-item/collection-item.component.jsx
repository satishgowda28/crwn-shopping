import React from 'react';
import {connect} from 'react-redux';
import {addCartItem} from '../../redux/cart/cart.action';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.style.scss';

const CollectionItem = ({item, addItemtoCart }) => {
  const {name, price, imageUrl} = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{backgroundImage:`url(${imageUrl})`}}/>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton reversed onClick={() => addItemtoCart(item)}>Add to Cart</CustomButton>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItemtoCart: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);