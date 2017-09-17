import React from 'react';

import Header from './containers/header';
import Search from './containers/search';
import SearchResults from './containers/search-results';

export default class App extends React.Component {

    render() {
        return (
            <div>

                <Header>
                </Header>
                <SearchResults>
                </SearchResults>

            </div>
        );
    }
}
