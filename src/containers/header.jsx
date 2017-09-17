import React from 'react';

import Search from './search';

export default class Header extends React.Component {

    render() {
        return (
            <header className="roulette__header">
				netflixroulette
				<Search></Search>
            </header>
        )
    }
}
