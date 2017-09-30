import React from 'react';
import CTFMapCell from './cell';

export default class CTFMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ctf-map">
                { this.props.config.map((row, i) => (
                    <div className="ctf-map__row" key={ i }>
                        { row.map((cell, j) => (
                            <CTFMapCell type={ cell.type } key={ j }></CTFMapCell>
                        )) }
                    </div>
                )) }
            </div>
        )
    }
}
