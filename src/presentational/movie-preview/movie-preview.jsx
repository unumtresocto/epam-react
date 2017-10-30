import React from 'react';

const MoviePreview = ({ config, className, onClick }) => (
    <div className={ "movie-preview " + className }
         onClick={ onClick }>
        <img className="movie-preview__cover" src={ config.coverLink } alt={ config.title }/>
        <div className="movie-preview__footer">
            <div>
                <h3 className="movie-preview__name">{ config.title }</h3>
                <span className="movie-preview__genre">{ config.genre }</span>
            </div>
            <div>
                <label className="movie-preview__year">{ config.year }</label>
            </div>
        </div>
    </div>
);

export default MoviePreview;
