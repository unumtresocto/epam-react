import { combineReducers } from 'redux'
import movies from './movies'

const netflixApp = combineReducers({
    movies
});

export default netflixApp;
