import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from '../slider';
import styles from './styles.css';
// import Home from '../../Pages/home';

// eslint-disable-next-line
class Main extends Component {
  render() {
    const { userStatus } = this.props;

    return (
      <div className={styles.main}>
        {userStatus ? <h2>UserCabinet See</h2> : <Slider />}
      </div>
    );
  }
}

Main.propTypes = {
  userStatus: PropTypes.bool.isRequired,
};

export default Main;
