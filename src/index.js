import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserHistory
} from 'history';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';

import indexRoutes from './routes/index';
import './index.css';

import * as serviceWorker from './serviceWorker';

const hist = createBrowserHistory();

ReactDOM.render( <
  Router history = {
    hist
  } >
  <
  Switch > {
    indexRoutes.map((prop, keysw) => ( <
      Route path = {
        prop.path
      }
      component = {
        prop.component
      }
      key = {
        keysw
      }
      />
    ))
  } <
  /Switch> <
  /Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
