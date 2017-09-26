import React from 'react';
import { Link } from 'react-router-dom';

import MoviesList from '../../presentational/movies-list/movies-list.jsx';

export default class SearchResults extends React.Component {
    constructor() {
        super();

        this.searchResultStubSample = {
            coverLink: 'http://netflixroulette.net/api/posters/60031236.jpg',
            title: 'KILL-BILL: VOL 1',
            year: '2003',
            genre: 'Action & Adventure',
        }

        this.searchResultStub = [];
        for (let i = 0; i < 10; i ++) {
            this.searchResultStub.push(this.searchResultStubSample);
        }
    }

    render() {
        return (
            <div className="search-results">
                <div>Sort by section placeholder</div>
                <MoviesList className="seach-results__movies-list" movies={ this.searchResultStub }/>
            </div>
        )
    }
}
