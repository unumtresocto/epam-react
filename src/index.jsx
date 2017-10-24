import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import netflixApp from './state/reducers/index';

import App from './App';

let store = createStore(
    netflixApp,
    applyMiddleware(thunk)
);

const render = () => {
    ReactDom.render(
        <AppContainer>

            <Provider store={ store }>

                <Router>

                    <App />

                </Router>

            </Provider>

        </AppContainer>,
        document.getElementById('app')
    )
}

render();

if (module.hot) {
    module.hot.accept('./App', render);
}
