import React from 'react';
import { Link } from 'react-router-dom';

import MoviesList from '../../presentational/movies-list/movies-list';

const SuggestedMovies = ({ movies }) => (
    <div className="suggested-movies">
        <div>Films by Quentin Tarantino section placeholder</div>
        <MoviesList className="suggested-movies__movies-list" movies={ movies }/>
    </div>
)

export default SuggestedMovies;
