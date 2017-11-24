import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './state/configureStore';

import App from './App';
require('./index.scss');

const store = configureStore(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;

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
};

render();
//
// if (module.hot) {
//     module.hot.accept('./App', render);
// }
