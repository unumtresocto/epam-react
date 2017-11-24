import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import netflixApp from './reducers/index';

export default (initialState) => {
    return createStore(netflixApp, initialState, applyMiddleware(thunkMiddleware));
}