import React from 'react';
import { Link } from 'react-router-dom';

import Textbox from '../../controls/textbox/textbox';
import Tumbler from '../../controls/tumbler/tumbler';
import Button from '../../controls/button/button';

export default class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tumblerStubConfig: {
                name: 'searchCriteria',
                config: [{
                    id: 1,
                    value: 'title',
                    caption: 'Title'
                }, {
                    id: 2,
                    value: 'director',
                    caption: 'Director'
                }]
            }
        }
    }

    render() {
        return (
            <div className={ "search " + this.props.className }>

                <h2 className="search__heading">
                    Find your movie
                </h2>

                <Textbox className="search__textbox"/>

                <div className="search__controls controls">
                    <div className="controls__search-by search-by">
                        Search by

                        <Tumbler className="search-by__tumbler"
                                 name={ this.state.tumblerStubConfig.name }
                                 config={ this.state.tumblerStubConfig.config }/>

                    </div>

                    <Link to="/search/Search%20Query">
                        <Button caption="Search" onClick={ this.props.onSearchClick } className="controls__search button--primary"/>
                    </Link>

                </div>

            </div>
        );
    }
}
