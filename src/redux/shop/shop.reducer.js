import ShopActionType from './shop.actiontypes';

const INITIAL_STATE = {
  collections: null,
  isLoading: false,
  error: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ShopActionType.COLLECTION_FETCH_START:
      return {
        ...state,
        isLoading: true
      }
    case ShopActionType.COLLECTION_FETCH_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        collections: action.payload
      }
    case ShopActionType.COLLECTION_FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
};

export default shopReducer;