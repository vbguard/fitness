import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import withAuthorization from '@hoc/withAuthentication';
import './App.css';
import Router from '../../routes';

// eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Test for worked Routing</h2>
        </div>
        <Router />
      </div>
    );
  }
}

export default withAuthorization(hot(module)(App));
