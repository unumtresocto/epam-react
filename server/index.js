import express from 'express';
import handleRender from './handleRender';

const port = 8000;
const server = express();

server.use(express.static('build'));
server.get('/*', handleRender);

server.listen(port, () => {
    console.info(`Express is listening on port ${port}`);
});