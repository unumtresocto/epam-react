import React from 'react';

const CTFMapCell = ({ config }) => (
    <div className="ctf-map__cell" style={{
        backgroundColor: config.player ? 'green' : config.visited ? 'yellow' : 'transparent',
        borderRightColor: config.walls.right ? 'red' : 'gray',
        borderBottomColor: config.walls.bottom ? 'red' : 'gray'
    }}></div>
);

export default CTFMapCell;
