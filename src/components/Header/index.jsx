import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

export class Header extends Component {
  state = {};

  render() {
    return (
      <header className={styles.header}>
        {/* LOGO */}
        <Link to="/">
          <h1>LOGO</h1>
        </Link>
        {/* SignIn */}
        <ul>
          <li>
            <Link to="/">SignIn</Link>
          </li>
          <li>
            <Link to="/">SignUp</Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
