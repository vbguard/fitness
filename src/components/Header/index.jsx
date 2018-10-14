import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.css';

export class Header extends Component {
  defaultMenu = () => (
    <ul>
      <li>
        <Link to="/signin">SignIn</Link>
      </li>
      <li>
        <Link to="/">SignUp</Link>
      </li>
    </ul>
  );

  loginedMenu = () => (
    <ul>
      <li>
        <Link to="/">Cabinet</Link>
      </li>
      <li>
        <Link to="/">Staistic</Link>
      </li>
      <li>
        <Link to="/">Ratings</Link>
      </li>
    </ul>
  );

  render() {
    const { userStatus } = this.props;

    return (
      <header className={styles.header}>
        <Link to="/">
          <h1>LOGO</h1>
        </Link>
        {!userStatus ? this.defaultMenu() : this.loginedMenu()}
      </header>
    );
  }
}

Header.propTypes = {
  userStatus: PropTypes.bool.isRequired,
};

export default Header;
