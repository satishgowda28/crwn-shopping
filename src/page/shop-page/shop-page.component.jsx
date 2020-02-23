import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {collectionSelector} from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


import './shope-page.style.scss';

const ShopPage = ({collections}) =>  (
  <div className='shop-page'>
    {
      collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: collectionSelector
});

export default connect(mapStateToProps)(ShopPage);