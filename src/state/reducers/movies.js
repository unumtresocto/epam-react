const movies = (state = { searchResults: [], currentMovie: undefined }, action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return {
                ...state,
                searchResults: action.payload.map(item => {
                    return {
                        ...item,
                        coverLink: `${POSTER_BASE_URL}/${item.poster_path}`,
                        year: new Date(item.release_date).getFullYear()
                    }
                })
            };
        case 'SELECT_MOVIE':
            return {
                ...state,
                currentMovie: action.payload
            };
        default:
            return state
    }
};

export default movies

const POSTER_BASE_URL = 'http://image.tmdb.org/t/p/w185';
