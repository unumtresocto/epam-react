import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { searchMovies } from '../../state/actions';

import Textbox from '../../controls/textbox/textbox';
import Button from '../../controls/button/button';

let Search = ({ dispatch, className }) => {
    let input;

    return (
        <div className={ "search " + className }>
            <h2 className="search__heading">
                Find your movie
            </h2>
            <Textbox
                className="search__textbox"
                onChange={ e => console.log(e) }
                ref={ textbox => input = textbox }/>

            <div className="search__controls controls">
                <div className="controls__search-by search-by">
                    Search by
                </div>
                <Link to="/search/Search%20Query">
                    <Button
                        caption="Search"
                        onClick={
                            e => {
                                if (! input.state.value.trim()) {
                                    return
                                }
                                dispatch(searchMovies(input.state.value));

                                input.state.value = ''
                            }
                        }
                        className="controls__search button--primary"/>
                </Link>
            </div>
        </div>
    );
};

Search = connect()(Search);

export default Search;
