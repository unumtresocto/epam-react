import React from 'react';
import { NavLink } from 'react-router-dom';

import MoviePreview from '../movie-preview/movie-preview.jsx';

const MoviesList = ({ className, movies, onMovieClick }) => (
    <div className="movies-list">
        {
            movies.map((item, i) => (

                    <NavLink key={ i } to={ `/film/${item.id}` }>
                        <MoviePreview config={ item }
                                      onClick={ () => onMovieClick(item.id) }
                                      className="movies-list__movie"/>
                    </NavLink>

                )
            )
        }
    </div>
);

export default MoviesList;
