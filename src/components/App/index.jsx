import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

import BurgerMenu from '../shared-ui/menu';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Welcome to React </h1>
          <BurgerMenu />
        </header>
        <p className="App-intro">
          To get started, edit <code> src / App.js </code> and save to reload.
        </p>
      </div>
    );
  }
}

export default hot(module)(App);
