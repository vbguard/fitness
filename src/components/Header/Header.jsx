/* eslint-disable react/jsx-no-literals */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import './styles.scss'

import Logo from '../shared-ui/logo'

export class Header extends Component {
  defaultMenu = () => (
    <ul className="navigation">
      <li className="navigation__item">
        <Link className="navigation__link"
          to="/login"
        >Вход</Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link"
          to="/sign-up"
        >Регистрация</Link>
      </li>
    </ul>
  );

  loginedMenu = () => (
    <ul className="navigation">
      <li className="navigation__item">
        <Link className="navigation__link"
          to="/"
        >Cabinet</Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link"
          to="/"
        >Staistic</Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link"
          to="/"
        >Ratings</Link>
      </li>
    </ul>
  );

  render() {
    const { userStatus } = this.props

    return (
      <header className="header">
        <Link className="logo-link"
          to="/"
        >
          <Logo />
        </Link>
        {!userStatus ? this.defaultMenu() : this.loginedMenu()}
      </header>
    )
  }
}

Header.propTypes = {

}

export default Header
