import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';

const render = () => {
    ReactDom.render(
        <AppContainer>

            <Router>

                <App />

            </Router>

        </AppContainer>,
        document.getElementById('app')
    )
}

render();

if (module.hot) {
    module.hot.accept('./App', render);
}
