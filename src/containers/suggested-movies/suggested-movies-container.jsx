import { connect } from 'react-redux'

import SuggestedMovies from '../../presentational/suggested-movies/suggested-movies';

const mapStateToProps = (state, ownProps) => {
    return {
        movies: state.movies.searchResults
    }
}

const SuggestedMoviesContainer = connect(
    mapStateToProps
)(SuggestedMovies);

export default SuggestedMoviesContainer;
