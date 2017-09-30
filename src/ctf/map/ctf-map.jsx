import React from 'react';
import CTFMapCell from './cell';

export default class CTFMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ctf-map" onKeyDown={ this.props.keyDownHandler }>
                { this.props.config.map((row, i) => (
                    <div className="ctf-map__row" key={ i }>
                        { row.map((cell, j) => (
                            <CTFMapCell config={ cell } key={ j }></CTFMapCell>
                        )) }
                    </div>
                )) }
            </div>
        )
    }
}
