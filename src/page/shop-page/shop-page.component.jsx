import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.action';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import './shope-page.style.scss';

class ShopPage extends React.Component {
  
  componentDidMount() {
    console.log('dsdsff')
    const {fetchShopCollectionAsync} = this.props;
    fetchShopCollectionAsync();
  }
  render() {
    const {match} = this.props;
    return (
      <div className='shop-page'>
        <Switch>
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </Switch>
      </div>
    )
  }
};


const mapDispatchToProps = dispatch => ({
  fetchShopCollectionAsync: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(null, mapDispatchToProps)(ShopPage);