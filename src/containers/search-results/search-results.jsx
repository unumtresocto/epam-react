import React from 'react';
import { Link } from 'react-router-dom';

import MoviePreview from '../../presentational/movie-preview/movie-preview.jsx';

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
                {
                    this.searchResultStub.map((item, i) => (

                        <Link key={ i } to="/search/Attack%20on%20titan">
                            <MoviePreview config={ item }
                                          className="search-results__movie"/>
                        </Link>

                        )
                    )
                }
            </div>
        )
    }
}
