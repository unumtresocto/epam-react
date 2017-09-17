import React from 'react';

const MoviePreview = ({ coverLink, title, year, genre }) => (
    <div className="movie-preview">
        <img className="movie-preview__cover" src={ coverLink } alt=""/>
        <div className="movie-preview__footer">
            <h3 className="moview-preview__name">{ title }</h3>
            <label className="movie-preview__year">{ year }</label>
            <p className="moview-preview__genre">{ genre }</p>
        </div>
    </div>
);

export default MoviePreview;
