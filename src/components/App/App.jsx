import React, { Component } from 'react';
// import withAuthorization from '@hoc/withAuthentication';
import { Header } from '../Header/Header';
// import SignInPage from '../Pages/auth-manager/SignInPage';
// import Router from '../../routes';
// import { Main } from '../Layouts/index';
import Main from '../Layouts/Main/Main';
import 'normalize.css';
import styles from './styles.scss';
// import Router from '../../routes';
// import Menu from '../shared-ui/menu';

// eslint-disable-next-line
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userState: false,
    };
  }

  changeUserStatus = () => {
    const { userState } = this.state;
    this.setState({
      userState: !userState,
    });
  };

  render() {
    const { userState } = this.state;
    console.log(this.props);
    return (
      <div className={styles.app}>
        <Header userStatus={userState} />
        <Main userStatus={userState} />
      </div>
    );
  }
}

export default App;
