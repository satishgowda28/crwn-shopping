import { connect } from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {collectionLoadedSelector} from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/HOC/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !collectionLoadedSelector(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer