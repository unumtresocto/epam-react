import React from 'react';

import CTFMap from './map/ctf-map';

import io from 'socket.io-client';

export default class CTF extends React.Component {
    constructor() {
        super();

        const mapConfigs = [];

        for (let k = 0; k < 5; k ++) {
            mapConfigs.push([]);
            for (let i = 0; i < 20; i ++) {
                mapConfigs[k].push([]);
                for (let j = 0; j < 20; j ++) {
                    mapConfigs[k][i].push({
                        player: false,
                        visited: false,
                        walls: {
                            right: false,
                            bottom: false
                        }
                    });
                }
            }
        }

        this.state = {
            status: '',
            lastMoveDirection: undefined,
            playerCoordinates: {
                x: 0,
                y: 0
            },
            mapConfigs: mapConfigs,
            currentLevel: 0
        }

        this.socket = io('45.76.95.55:8031');
        this.socket.on('connect', () => console.log('connected succesfully'));
        this.socket.on('status', (data) => this.updateStatus(data));
        this.socket.on('error_message', (data) => this.handleInvalidMove(data));
        this.socket.on('message', (data) => console.log('Flag is here: ' + data));
        this.socket.on('disconnect', () => console.log('connection lost'));
    }

    getCurrentMap() {
        return this.state.mapConfigs[this.state.currentLevel];
    }

    updatePlayer() {
        const mapConfig = this.getCurrentMap();
        mapConfig[this.state.status.pos.x][this.state.status.pos.y].player = true;

        this.setState({
            ...this.state,
            playerCoordinates: {
                x: this.state.status.pos.x,
                y: this.state.status.pos.y
            }
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

        this.setState({
            ...this.state,
            status: status,
            currentLevel: status.level,
        });

        this.updatePlayer();
    }

    handleInvalidMove(data) {
        console.log(data);

        let x = this.state.status.pos.x;
        let y = this.state.status.pos.y;

        const map = this.getCurrentMap();

        map[this.state.status.pos.x][this.state.status.pos.y].player = true;

        switch (this.state.lastMoveDirection) {
            case 1: map[x-1][y].walls.bottom = true; break;
            case 2: map[x][y-1].walls.right = true; break;
            case 3: map[x][y].walls.bottom = true; break;
            case 4: map[x][y].walls.right = true; break;
        }

        this.setState({ ...this.state });
    }

    move(direction) {
        this.getCurrentMap()[this.state.playerCoordinates.x][this.state.playerCoordinates.y].player = false;
        this.getCurrentMap()[this.state.playerCoordinates.x][this.state.playerCoordinates.y].visited = true;

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

                <CTFMap config={ this.getCurrentMap() }></CTFMap>
            </div>
        )
    }
}
