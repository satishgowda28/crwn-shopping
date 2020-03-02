import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {collArraySelector} from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';


const CollectionOverview = ({collections}) => {
  console.log('Im mounting')
  return (
  <div className="collection-overview">
    {
      collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
  </div>
)};
const mapStateToProps = createStructuredSelector({
  collections: collArraySelector
});

export default connect(mapStateToProps)(CollectionOverview);