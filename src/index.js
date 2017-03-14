import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route} from 'react-router';

import App from './components/App';
import './styles/index.css';
import store, { history } from './store';
import Animals from './components/Clothes';
import Nav from './components/Nav';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={Nav}>
        <Route path="/" component={App} />
        <Route path="clothes" component={Animals} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
);
