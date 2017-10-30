import React from 'react';
import {
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';

import style from './index.scss';

import SearchResultsContainer from './containers/search-results/search-results-container';
import SuggestedMovies from './containers/suggested-movies/suggested-movies-container';
import MovieContainer from './containers/movie/movie-container';
import Search from './containers/search/search';
import Header from './presentational/header/header';
import Footer from './presentational/footer/footer';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            movieConfigStub: {
                coverLink: 'http://netflixroulette.net/api/posters/880640.jpg',
                title: 'Pulp Fiction',
                year: 1994,
                rating: 4.1,
                genre: 'Oscar-winning movies',
                length: '154 min',
                description: "Weaving together three stories featuring a burger-loving " +
                             "hit man, his philosophical partner and a washed-up boxer, Quentin Tarantino " +
                             "influenced a generation of filmmakers with this crime caper's stylized, " +
                             "over-the-top violence and dark comic spirit.",
                director: 'Quentin Tarantino',
                cast: [
                        'John Travolta', 'Samuel L. Jackson', 'Uma Thurman', 'Bruce Willis', 'Harvey Keitel',
                        'Tim Roth', 'Amanda Plummer', 'Ving Rhames', 'Eric Stoltz', 'Maria de Medeiros'
                    ]
            }
        };
    }

    render() {

        return (
            <div className="app-root">
                <section className="primary">
                    <div className="container">

                        <Header/>

                        <Switch>
                            <Route path={'/film/:id'} render={() => (
                                <MovieContainer/>
                            )}/>
                            <Route render={() => (
                                <Search className="header__search"/>
                            )}/>
                        </Switch>

                    </div>
                </section>
                <section className="secondary">
                    <div className="container">

                        <Switch>
                            <Route exact path={'/'} render={ () => (
                                <h3>NO DATA FOUND</h3>
                            )}/>

                            <Route path={'/search/:query'} component={ SearchResultsContainer }/>
                            <Route path={'/film/:id'} component={ SuggestedMovies }/>
                            <Route render={() => (
                                <Redirect to={{
                                    pathname: '/'
                                }}/>
                            )}/>
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
