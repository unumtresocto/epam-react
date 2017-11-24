import React from 'react';
import { Link, Route } from 'react-router-dom';
import Button from '../../controls/button/button';

export default class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <h1 className="header__heading">notflixroulette</h1>
                <Route path={ '/film/:id' } render={ () => (
                    <Link to="/search/:query">
                        <Button caption="Back"
                                className="header__back button--primary button--small"/>
                    </Link>
                ) }/>
            </header>
        )
    }
}
