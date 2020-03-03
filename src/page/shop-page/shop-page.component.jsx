import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop.action';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import './shope-page.style.scss';

class ShopPage extends React.Component {
  
  componentDidMount() {
    console.log('dsdsff')
    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart();
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
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(ShopPage);