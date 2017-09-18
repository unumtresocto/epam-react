import React from 'react';

import Rating from '../rating/rating';

const Movie = ({ className, config }) => (
    <main className={"movie " + className}>
        <img className="movie__cover" src={ config.coverLink } alt=""/>
        <section className="movie__details">
            <h2 className="movie__name">
                { config.title }
                <Rating className="movie__rating rating--good" rating={ config.rating }/>
            </h2>
            <h4 className="movie__genre">{ config.genre }</h4>
            <div>
                <span className="movie__year">{ config.year }</span>
                <span className="movie__length">{ config.length }</span>
            </div>
            <p className="movie__description">{ config.description }</p>
            <p className="movie__director">Director: { config.director }</p>
            <p className="movie__cast">Cast: { config.cast.join(', ') }</p>
        </section>
    </main>
);

export default Movie;
