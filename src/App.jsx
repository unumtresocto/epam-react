import React from 'react';
import style from './index.scss'

import Search from './containers/search/search';
import SearchResults from './containers/search-results/search-results';
import Header from './presentational/header/header';
import Footer from './presentational/footer/footer';
import Movie from './presentational/movie/movie';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            movieConfigStub: undefined
        };
    }

    search() {
        this.setState({
            movieConfigStub: {
                coverLink: 'http://netflixroulette.net/api/posters/880640.jpg',
                title: 'Pulp Fiction',
                year: 1994,
                rating: 4.1,
                genre: 'Oscar-winning movies',
                length: '154 min',
                description: "Weaving together three stories featuring a burger-loving" +
                             "hit man, his philosophical partner and a washed-up boxer, Quentin Tarantino" +
                             "influenced a generation of filmmakers with this crime caper's stylized," +
                             "over-the-top violence and dark comic spirit.",
                director: 'Quentin Tarantino',
                cast: [
                        'John Travolta', 'Samuel L. Jackson', 'Uma Thurman', 'Bruce Willis', 'Harvey Keitel',
                        'Tim Roth', 'Amanda Plummer', 'Ving Rhames', 'Eric Stoltz', 'Maria de Medeiros'
                    ]
            }
        });
    }

    render() {

        return (
            <div>
                <section className="primary">
                    <div className="container">

                        <Header/>
                        <Search className="header__search" onSearchClick={ () => this.search() }/>
                        { this.state.movieConfigStub ? <Movie config={ this.state.movieConfigStub }/> : null }

                    </div>
                </section>
                <section className="secondary">
                    <div className="container">

                        <SearchResults/>

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
