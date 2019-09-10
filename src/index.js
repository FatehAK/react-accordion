import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import App from './components/App/App';
import './index.scss';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <Route exact path="/" component={App} />
    </BrowserRouter>,

    rootElement
);

serviceWorker.unregister();
