import {createStore, applyMiddleware} from 'redux';
import Logger from 'redux-logger';
// import thunk from 'redux-thunk';
import CreateSagaMiddleware from 'redux-saga';
import RootReducer from './root-reducer';
import RootSaga from './root.sagas';

const sagaMiddleware = CreateSagaMiddleware();

const middelware = [sagaMiddleware, Logger];
const store = createStore(RootReducer, applyMiddleware(...middelware));
sagaMiddleware.run(RootSaga);

export default store;