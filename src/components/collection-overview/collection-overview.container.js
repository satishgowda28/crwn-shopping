import { connect } from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {collectionisFectchingSelector} from '../../redux/shop/shop.selectors';
import WithSpinner from '../HOC/with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: collectionisFectchingSelector
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;