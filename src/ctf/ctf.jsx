import React from 'react';

import CTFMap from './map/ctf-map';

import io from 'socket.io-client';

export default class CTF extends React.Component {
    constructor() {
        super();

        const mapConfig = [];

        for (let i = 0; i < 20; i ++) {
            mapConfig.push([]);
            for (let j = 0; j < 20; j ++) {
                mapConfig[i].push({ type: 'd' });
            }
        }

        this.state = {
            status: '',
            lastMove: undefined,
            mapConfig: mapConfig
        }

        this.socket = io('45.76.95.55:8031');
        this.socket.on('connect', () => console.log('connected succesfully'));
        this.socket.on('status', (data) => this.updateStatus(data));
        this.socket.on('error_message', (data) => this.handleInvalidMove(data));
        this.socket.on('message', (data) => console.log(data));
        this.socket.on('disconnect', () => console.log('connection lost'));
    }

    updateStatus(status) {
        console.log(status);
        if (typeof status == "string") {
            status = JSON.parse(status);
        }
        this.state.mapConfig[status.pos.x][status.pos.y].type = '';

        this.setState({
            ...this.state,
            status: status
        });
    }

    handleInvalidMove(data) {
        console.log(data);

        let x = this.state.status.pos.x;
        let y = this.state.status.pos.y;

        switch (this.state.lastMove) {
            case 1: x--; break;
            case 2: y--; break;
            case 3: x++; break;
            case 4: y++; break;
        }

        if(x >= 0 && y >= 0) {
            this.state.mapConfig[x][y].type = 'x';
        }

        this.setState({ ...this.state });
    }

    move(direction) {
        this.setState({
            ...this.state, lastMove: direction
        });

        this.socket.emit('action', {
            type: 'move',
            direction: direction
        });
    }

    render() {
        return (
            <div className="CTF">
                <h2>Debug</h2>
                <div>
                    { this.state.lastMove }
                </div>
                <div className="ctf-controls">
                    <div className="ctf-button" onClick={ this.move.bind(this, 4) }>RIGHT</div>
                    <div className="ctf-button" onClick={ this.move.bind(this, 2) }>LEFT</div>
                    <div className="ctf-button" onClick={ this.move.bind(this, 1) }>UP</div>
                    <div className="ctf-button" onClick={ this.move.bind(this, 3) }>DOWN</div>
                </div>

                <CTFMap config={ this.state.mapConfig }></CTFMap>
            </div>
        )
    }
}
