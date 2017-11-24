import movies from './movies';

const movieStub = { title: 'Test Movie 1' };
const moviesStub = [{ title: 'Test Movie 2'}, { title: 'Test Movie 3' }];

describe('movies reducer', () => {
    it('should handle initial state', () => {
        expect(
            movies(undefined, {})
        ).toEqual({ searchResults: [], currentMovie: undefined });
    });

    it('should handle SET_SEARCH_RESULTS', () => {
        expect(
            movies({
                searchResults: [],
                currentMovie: undefined
            }, {
                type: 'SET_SEARCH_RESULTS',
                payload: moviesStub
            })
        ).toEqual({
            searchResults: moviesStub,
            currentMovie: undefined
        });
    });

    it('should handle SELECT_MOVIE', () => {
        expect(
            movies({
                searchResults: [],
                currentMovie: undefined
            }, {
                type: 'SELECT_MOVIE',
                payload: movieStub
            })
        ).toEqual({
            searchResults: [],
            currentMovie: movieStub
        });
    });
});