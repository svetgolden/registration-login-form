import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

export default function configureStore( initialState ){

 return createStore(reducers, initialState, applyMiddleware(thunk, createLogger({collapsed: true})));
}

