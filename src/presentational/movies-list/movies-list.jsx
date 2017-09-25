import React from 'react';
import { Link } from 'react-router-dom';

import MoviePreview from '../movie-preview/movie-preview.jsx';

const MoviesList = ({ className, movies }) => (
    <div className="movies-list">
        {
            movies.map((item, i) => (

                <Link key={ i } to="/film/Attack%20on%20titan">
                    <MoviePreview config={ item }
                                  className="movies-list__movie"/>
                </Link>

                )
            )
        }
    </div>
);

export default MoviesList;
