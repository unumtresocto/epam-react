import * as actions from './index';

const searchResultStub = [{ title: 'test1' }, { title: 'test2' }];
const selectedMovieStub = { title: 'test3' };

describe('Notflix actions', () => {
    it('setSearchResults should create SET_SEARCH_RESULTS action', () => {
        expect(actions.setSearchResults(searchResultStub)).toEqual({
            type: 'SET_SEARCH_RESULTS',
            payload: searchResultStub
        });
    });

    it('selectCurrentMovie should create SELECT_MOVIE action', () => {
        expect(actions.selectCurrentMovie(selectedMovieStub)).toEqual({
            type: 'SELECT_MOVIE',
            payload: selectedMovieStub
        });
    });
});