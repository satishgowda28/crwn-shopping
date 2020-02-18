import {createStore, applyMiddleware} from 'redux';
import Logger from 'redux-logger';
import RootReducer from './root-reducer';

const middelware = [Logger];
const store = createStore(RootReducer, applyMiddleware(...middelware));

export default store;