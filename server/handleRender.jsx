import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import configureStore from '../src/state/configureStore';
import App from '../src/App';
import { Provider } from 'react-redux';

function renderFullPage(html, preloadedState) {
    return `<!doctype html>
            <html>
                <head>
                    <meta charset=utf-8>
                    <title>Notflix</title>
                    <link rel="stylesheet" href="app.css">
                </head>
                <body>
                    <div id="app">${html}</div>
                    <script>
                        window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\\u003c')}
                    </script>
                    <script src="app.js"></script>
                </body>
            </html>`;
}

function handleRender(req, res) {
    const store = configureStore();
    const context = {};
    const app = (
        <Provider store={ store }>
            <StaticRouter location={ req.url } context={ context } >
                <App/>
            </StaticRouter>
        </Provider>
    );

    const html = renderToString(app);

    if (context.url) {
        return res.redirect(context.url);
    }

    const preloadedState = store.getState();
    return res.send(renderFullPage(html, preloadedState));
}

export default handleRender;