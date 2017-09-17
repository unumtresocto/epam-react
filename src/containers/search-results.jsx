import React from 'react';
import MoviePreview from '../presentational/movie-preview.jsx';

export default class SearchResults extends React.Component {

    render() {
        return (
            <div className="search-results">
                <MoviePreview
                    coverLink="http://netflixroulette.net/api/posters/60031236.jpg"
                    title="KILL-BILL: VOL 1"
                    year="2003"
                    genre="Action & Adventure">
                </MoviePreview>
                <MoviePreview
                    coverLink="http://netflixroulette.net/api/posters/60031236.jpg"
                    title="KILL-BILL: VOL 1"
                    year="2003"
                    genre="Action & Adventure">
                </MoviePreview>
                <MoviePreview
                    coverLink="http://netflixroulette.net/api/posters/60031236.jpg"
                    title="KILL-BILL: VOL 1"
                    year="2003"
                    genre="Action & Adventure">
                </MoviePreview>
                <MoviePreview
                    coverLink="http://netflixroulette.net/api/posters/60031236.jpg"
                    title="KILL-BILL: VOL 1"
                    year="2003"
                    genre="Action & Adventure">
                </MoviePreview>
            </div>
        )
    }
}
