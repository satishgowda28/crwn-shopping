import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
import {updateShopCollection} from '../../redux/shop/shop.action';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import './shope-page.style.scss';

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollectionItems} = this.props;
    const collectionRef = firestore.collection('collection');
    collectionRef.onSnapshot(async spanshot => {
      const collectionMap = convertCollectionSnapshotToMap(spanshot);
      updateCollectionItems(collectionMap);
    })
  }
  render() {
    const {match} = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  updateCollectionItems: collectionsItems => dispatch(updateShopCollection(collectionsItems)),
})

export default connect(null, mapDispatchToProps)(ShopPage);