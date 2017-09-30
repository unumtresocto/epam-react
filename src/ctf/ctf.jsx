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
                mapConfig[i].push({
                    player: false,
                    visited: false,
                    walls: {
                        right: false,
                        bottom: false
                    }
                });
            }
        }

        this.state = {
            status: '',
            lastMoveDirection: undefined,
            playerCoordinates: {
                x: 0,
                y: 0
            },
            mapConfig: mapConfig,
            currentLevel: 0
        }

        this.socket = io('45.76.95.55:8031');
        this.socket.on('connect', () => console.log('connected succesfully'));
        this.socket.on('status', (data) => this.updateStatus(data));
        this.socket.on('error_message', (data) => this.handleInvalidMove(data));
        this.socket.on('message', (data) => console.log(data));
        this.socket.on('disconnect', () => console.log('connection lost'));
    }

    resetMap() {
        const mapConfig = [];

        for (let i = 0; i < 20; i ++) {
            mapConfig.push([]);
            for (let j = 0; j < 20; j ++) {
                mapConfig[i].push({
                    player: false,
                    walls: {
                        right: false,
                        bottom: false
                    }
                });
            }
        }

        this.setState({
            ...this.state,
            mapConfig: mapConfig
        })
    }

    updatePlayerOnMap() {
        const mapConfig = this.state.mapConfig;
        mapConfig[this.state.playerCoordinates.x][this.state.playerCoordinates.y].player = true;

        this.setState({
            ...this.state,
            mapConfig: mapConfig
        })
    }

    keyDownHandler(e) {
        switch(e.key) {
            case 'ArrowDown': this.move(3); break;
            case 'ArrowUp': this.move(1); break;
            case 'ArrowLeft': this.move(2); break;
            case 'ArrowRight': this.move(4); break;
        }
    }

    updateStatus(status) {
        console.log(status);
        if (typeof status == "string") {
            status = JSON.parse(status);
        }

        if (this.state.currentLevel !== status.level) {
            this.resetMap();
        }

        this.setState({
            ...this.state,
            status: status,
            currentLevel: status.level,
            playerCoordinates: {
                x: status.pos.x,
                y: status.pos.y
            }
        });

        this.updatePlayerOnMap();
    }

    handleInvalidMove(data) {
        console.log(data);

        let x = this.state.status.pos.x;
        let y = this.state.status.pos.y;

        this.state.mapConfig[this.state.status.pos.x][this.state.status.pos.y].player = true;

        switch (this.state.lastMoveDirection) {
            case 1: this.state.mapConfig[x-1][y].walls.bottom = true; break;
            case 2: this.state.mapConfig[x][y-1].walls.right = true; break;
            case 3: this.state.mapConfig[x][y].walls.bottom = true; break;
            case 4: this.state.mapConfig[x][y].walls.right = true; break;
        }

        this.setState({ ...this.state });
    }

    move(direction) {
        this.state.mapConfig[this.state.playerCoordinates.x][this.state.playerCoordinates.y].player = false;
        this.state.mapConfig[this.state.playerCoordinates.x][this.state.playerCoordinates.y].visited = true;

        this.setState({
            ...this.state,
            lastMoveDirection: direction
        });

        this.socket.emit('action', {
            type: 'move',
            direction: direction
        });
    }

    render() {
        return (
            <div className="CTF">
                <input onKeyDown={ this.keyDownHandler.bind(this) }></input>
                <div>
                    { this.state.lastMoveDirection }
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
