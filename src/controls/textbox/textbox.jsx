import React from 'react';

export default class Textbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.defaultValue || ''
        }
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        })

        if (this.props.onChange) {
            this.props.onChange();
        }
    }

    render() {
        return (
            <input className={ "textbox " + this.props.className }
                   type="text"
                   value={ this.props.defaultValue }
                   onChange={ (e) => this.onChange(e) } />
        );
    }
};
