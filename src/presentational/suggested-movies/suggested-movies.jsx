import React from 'react';
import MoviesListContainer from '../../containers/movies-list/movies-list-container';

const SuggestedMovies = ({ movies }) => (
    <div className="suggested-movies">
        {/*<div>Films by Quentin Tarantino section placeholder</div>*/}
        <MoviesListContainer className="suggested-movies__movies-list" movies={ movies }/>
    </div>
);

export default SuggestedMovies;
