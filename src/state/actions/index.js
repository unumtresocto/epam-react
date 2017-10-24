export const searchMovie = query => {
    return dispatch => searchMovies(query)
                            .then(
                                response => response.json(),
                                error => console.error(error)
                            )
                            .then(
                                data => dispatch(setMovies(data.results))
                            );
}

export const setMovies = movies => {
    return {
        type: 'SET_MOVIES',
        payload: movies
    }
}

export const selectCurrentMovie = id => {
    return {
        type: 'SELECT_CURRENT_MOVIE',
        payload: id
    };
}

const API_KEY = '16b774bf223920b19a7f2ba5eceac219'


function searchMovies(query) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
}
