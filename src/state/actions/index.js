export const searchMovie = query => {
    return dispatch => _searchMovies(query)
        .then(
            response => response.json(),
            error => console.error(error)
        )
        .then(
            data => dispatch(setMovies(data.results))
        );
};

export const setMovies = movies => {
    return {
        type: 'SET_MOVIES',
        payload: movies
    }
};

export const selectCurrentMovie = (data) => {
    return {
        type: 'SELECT_MOVIE',
        payload: data
    };
};

export const getMovie = id => {
    return dispatch => _getMovie(id)
        .then(
            response => response.json(),
            error => console.error(error)
        )
        .then(
            data => dispatch(selectCurrentMovie(data))
        )
};

const API_KEY = '16b774bf223920b19a7f2ba5eceac219';


function _searchMovies(query) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
}

function _getMovie(id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
}
