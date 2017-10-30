import { connect } from 'react-redux'

import { selectCurrentMovie } from '../../state/actions';

import Movie from '../../presentational/movie/movie';

const mapStateToProps = (state, ownProps) => {
    return {
        config: state.movies.currentMovie
    }
}

const MovieContainer = connect(
    mapStateToProps
)(Movie);

export default MovieContainer;
