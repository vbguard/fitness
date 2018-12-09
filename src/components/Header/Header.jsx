/* eslint-disable no-console */
/* eslint-disable react/jsx-no-literals */
import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { signOut } from '../../redux/actions/userActions'
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

  logOut = event => {
    console.log('logout: ', event)
    event.preventDefault()
    this.props.logout()
    this.props.location.push('/')
  }
  
  defaultMenu = () => (
    <ul className="navigation">
      <li className="navigation__item">
        <NavLink className="navigation__link"
          to="/login"
        >Вход</NavLink>
      </li>
      <li className="navigation__item">
        <NavLink className="navigation__link"
          to="/sign-up"
        >Регистрация</NavLink>
      </li>
    </ul>
  );

  loginedMenu = () => (
    <ul className="navigation">
      <li className="navigation__item">
        <Link className="navigation__link"
          to="/cabinet"
        >Кабинет</Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link"
          to="/statistic"
        >Статистика</Link>
      </li>
      <li className="navigation__item">
        <NavLink className="navigation__link"
          to="/rating"
        >Рейтинг</NavLink>
      </li>
      <li className="navigation__item">
        <a className="navigation__link"
          onClick={this.props.signOut}
          to="/"
        >Выйти</a>
      </li>
    </ul>
  );

  render() {
    // const { userStatus } = this.state
    const { auth } = this.props
    console.log('header props: ', this.props)
    return (
      <header className="header">
        <NavLink className="logo-link"
          to="/"
        >
          <Logo />
        </NavLink>
        {!auth.uid ? this.defaultMenu() : this.loginedMenu()}
      </header>
    )
  }
}

Header.propTypes = {

}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
