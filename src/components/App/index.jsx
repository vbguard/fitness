import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import withAuthorization from '@hoc/withAuthentication';
import { Route } from 'react-router-dom';
import { Header } from '../Header';
// import Router from '../../routes';
// import { Main } from '../Layouts/index';
import Main from '../Layouts/main';
import 'normalize.css';
import styles from './styles.css';
// import Router from '../../routes';
// import Menu from '../shared-ui/menu';

// eslint-disable-next-line
class App extends Component {
  state = {
    userState: false,
  };

  changeUserStatus = () => {
    const { userState } = this.state;
    this.setState({
      userState: !userState,
    });
  };

  render() {
    const { userState } = this.state;

    return (
      <div className={styles.app}>
        <Header userStatus={userState} />
        {/* Route  to <Main /> //home or //cabinet */}
        <Route
          path="/"
          component={props => <Main userStatus={userState} {...props} />}
        />
        <button
          className={styles.app__button}
          onClick={this.changeUserStatus}
          type="button"
        >
          Change user status
        </button>
      </div>
    );
  }
}

export default withAuthorization(hot(module)(App));
