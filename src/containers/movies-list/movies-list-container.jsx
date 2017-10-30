import { connect } from 'react-redux'

import { selectCurrentMovie } from '../../state/actions';

import MoviesList from '../../presentational/movies-list/movies-list';

const mapStateToProps = (state, ownProps) => {
    return {
        movies: ownProps.movies,
        className: ownProps.className
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMovieClick: id => {
            dispatch(selectCurrentMovie(id));
        }
    }
}

const MoviesListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesList);

export default MoviesListContainer;
