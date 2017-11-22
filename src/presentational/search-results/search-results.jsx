import React from 'react';

import MoviesListContainer from '../../containers/movies-list/movies-list-container';

const SearchResults = ({ movies }) => (
    <div className="search-results">
        <div>Sort by section placeholder</div>
        <MoviesListContainer className="seach-results__movies-list" movies={ movies }/>
    </div>
);

export default SearchResults;
