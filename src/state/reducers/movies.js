const movies = (state = { searchResults: [], currentMovie: undefined }, action) => {
    switch (action.type) {
        case 'SET_SEARCH_RESULTS':
            return {
                ...state,
                searchResults: action.payload
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

export default movies;

