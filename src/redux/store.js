import {createStore, applyMiddleware} from 'redux';
import Logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from './root-reducer';

const middelware = [thunk, Logger];
const store = createStore(RootReducer, applyMiddleware(...middelware));

export default store;