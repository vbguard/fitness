import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from '../Slider/Slider';
import Cabinet from '../Cabinet/Cabinet';
import styles from './styles.css';
// import Home from '../../Pages/home';

// eslint-disable-next-line
class Main extends Component {
  render() {
    const { userStatus } = this.props;

    return (
      <div className={styles.main}>
        {userStatus ? <Cabinet /> : <Carousel />}
      </div>
    );
  }
}

Main.propTypes = {
  userStatus: PropTypes.bool.isRequired,
};

export default Main;
