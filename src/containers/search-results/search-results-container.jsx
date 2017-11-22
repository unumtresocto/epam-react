import { connect } from 'react-redux'

import SearchResults from '../../presentational/search-results/search-results';

const mapStateToProps = (state, ownProps) => {
    return {
        movies: state.movies.searchResults
    }
};

const SearchResultsContainer = connect(
    mapStateToProps
)(SearchResults);

export default SearchResultsContainer;
