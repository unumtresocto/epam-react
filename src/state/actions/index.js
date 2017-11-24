const API_KEY = '16b774bf223920b19a7f2ba5eceac219';
const API_BASE = 'https://api.themoviedb.org/3';
const POSTER_BASE_URL = 'http://image.tmdb.org/t/p';

export const searchMovies = query => {
    return dispatch => _searchMovies(query)
        .then(
            response => response.json(),
            error => console.error(error)
        )
        .then(data => data.results.map(item => _configureCoverLink(item, 185)))
        .then(data => dispatch(setSearchResults(data)));
};

export const getMovie = id => {
    return dispatch => _getMovie(id)
        .then(
            response => response.json(),
            error => console.error(error)
        )
        .then(data => _configureCoverLink(data, 342))
        .then(
            data => dispatch(selectCurrentMovie(data))
        )
};

export const setSearchResults = movies => {
    return {
        type: 'SET_SEARCH_RESULTS',
        payload: movies
    }
};

export const selectCurrentMovie = (data) => {
    return {
        type: 'SELECT_MOVIE',
        payload: data
    };
};

// This method replaces poster path with full link
// Possible sizes: "w92", "w154", "w185", "w342", "w500", "w780", or "original"
function _configureCoverLink(item, size) {
    return item.poster_path ?
        { ...item, poster_path: `${POSTER_BASE_URL}/w${size}/${item.poster_path}` }
        : item;
}

function _searchMovies(query) {
    return fetch(`${API_BASE}/search/movie?api_key=${API_KEY}&query=${query}`);
}

function _getMovie(id) {
    return fetch(`${API_BASE}/movie/${id}?api_key=${API_KEY}`);
}
