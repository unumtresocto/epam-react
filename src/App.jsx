import React from 'react';
import {
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import SearchResultsContainer from './containers/search-results/search-results-container';
import SuggestedMovies from './containers/suggested-movies/suggested-movies-container';
import MovieContainer from './containers/movie/movie-container';
import Search from './containers/search/search';
import Header from './presentational/header/header';
import Footer from './presentational/footer/footer';

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div className="app-root">
                <section className="primary">
                    <div className="container">

                        <Header/>

                        <Switch>
                            <Route path={ '/movie/:id' } render={ () => (
                                <MovieContainer/>
                            ) }/>
                            <Route render={ () => (
                                <Search className="header__search"/>
                            ) }/>
                        </Switch>

                    </div>
                </section>
                <section className="secondary">
                    <div className="container">

                        <Switch>
                            <Route exact path="/" render={ () => (
                                <h3>NO DATA FOUND</h3>
                            ) }/>

                            <Route path="/search/:query" component={ SearchResultsContainer }/>
                            <Route path="/movie/:id" render={ () => null }/>
                            <Redirect to="/"/>
                        </Switch>

                    </div>
                </section>

                <section className="primary">
                    <div className="container">

                        <Footer/>

                    </div>
                </section>
            </div>
        );
    }
}
