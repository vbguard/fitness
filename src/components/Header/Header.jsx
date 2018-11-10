/* eslint-disable no-console */
/* eslint-disable react/jsx-no-literals */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUser, logout } from '../../redux/actions/userActions'
import './styles.scss'

import Logo from '../shared-ui/logo'

export class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userStatus: false
    }
  }

  componentWillMount() {
    if(this.props.user !== null) {
      this.setState({ userStatus: true })
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('login nextProps: ', nextProps)
    if (nextProps.user.isLogined) {
      this.setState({userStatus: false})
    }
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('nextProps: ', nextProps)
    console.log('nextState: ', nextState)
    // if (nextProps.user !== null) {
    //   return this.setState({userStatus: true})
    // }
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('prevProps: ', prevProps)
    console.log('nextState: ', prevState)
  }

  logOut = event => {
    console.log('logout: ', event)
    event.preventDefault()
    this.props.logout()
  }
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
          to="/cabinet"
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
      <li className="navigation__item">
        <Link className="navigation__link"
          onClick={this.logOut}
          to="/"
        >Вийти</Link>
      </li>
    </ul>
  );

  render() {
    const { userStatus } = this.state
    console.log('header props: ', this.props)
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
  logout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, { getUser, logout })(Header)
