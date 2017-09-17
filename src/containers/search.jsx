import React from 'react';
import Textbox from '../controls/textbox';
import Tumbler from '../controls/tumbler';
import Button from '../controls/button';

export default class Search extends React.Component {

    constructor() {
        super();
        this.tumblerStubConfig = {
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

    render() {
        return (
            <div className="search">

                <h2 className="search__heading">
                    Find your movie
                </h2>

                <Textbox>
                </Textbox>

                <div className="search__controls">
                    Search by

                    <Tumbler
                        name={ this.tumblerStubConfig.name }
                        config={ this.tumblerStubConfig.config }>

                    </Tumbler>

                    <Button caption="Search">
                    </Button>

                </div>

            </div>
        );
    }
}
