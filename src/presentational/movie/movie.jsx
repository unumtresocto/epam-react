import React from 'react';

import Rating from '../rating/rating';

const Movie = ({ className, config }) => (
    config ? <main className={ "movie " + className }>
        <img className="movie__cover" src={ 'https://placehold.it/150x300'} alt=""/>
        <section className="movie__details">
            <h2 className="movie__name">
                { config.original_title }
                <Rating className="movie__rating" rating={ config.vote_average }/>
            </h2>
            <h4 className="movie__genre">{ config.genres.map(item => item.name).join(',') }</h4>
            <div>
                <span className="movie__year">{ config.release_date }</span>
                <span className="movie__length">{ config.runtime }</span>
            </div>
            <p className="movie__description">{ config.overview }</p>
            {/*<p className="movie__director">Director: { config.director }</p>*/}
            {/*<p className="movie__cast">Cast: { config.cast }</p>*/}
        </section>
    </main> : null
);

export default Movie;
