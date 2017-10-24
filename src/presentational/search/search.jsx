import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { searchMovie } from '../../state/actions';

import Textbox from '../../controls/textbox/textbox';
import Tumbler from '../../controls/tumbler/tumbler';
import Button from '../../controls/button/button';

let Search = ({ dispatch, className }) => {
    let input;

    return (
        <div className={ "search " + className }>

            <h2 className="search__heading">
                Find your movie
            </h2>

            // <Textbox className="search__textbox"/>
            <input
                ref={ node => {
                    input = node
                } }
            />

            <div className="search__controls controls">
                <div className="controls__search-by search-by">
                    Search by
                </div>

                <Button caption="Search" onClick={
                        e => {
                                 if (!input.value.trim()) {
                                     return
                                 }
                                 dispatch(searchMovie(input.value))

                                 input.value = ''
                             }
                     } className="controls__search button--primary"/>

            </div>

        </div>
    );
}
Search = connect()(Search)

export default Search;
