import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
// import Home from '../../Pages/home';
// eslint-disable-next-line
class Main extends Component {
  render() {
    const { userStatus } = this.props;

    return (
      <div className={styles.main}>
        <h1>It main layout with carosuel or Cabinet</h1>
        {userStatus ? (
          <h2>UserCabinet See</h2>
        ) : (
          <h2>If user not login see Slider</h2>
        )}
      </div>
    );
  }
}

Main.propTypes = {
  userStatus: PropTypes.bool.isRequired,
};

export default Main;