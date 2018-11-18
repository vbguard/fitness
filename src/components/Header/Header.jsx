/* eslint-disable no-console */
/* eslint-disable react/jsx-no-literals */
import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
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

  componentWillReceiveProps(nextProps) {
    console.log('login nextProps: ', nextProps)
    // if (nextProps.user.isLogined) {
    //   this.setState({userStatus: true})
    // }
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
        >Cabinet</Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link"
          to="/statistic"
        >Staistic</Link>
      </li>
      <li className="navigation__item">
        <NavLink className="navigation__link"
          to="/rating"
        >Ratings</NavLink>
      </li>
      <li className="navigation__item">
        <a className="navigation__link"
          onClick={this.props.signOut}
          to="/"
        >Вийти</a>
      </li>
    </ul>
  );

  render() {
    // const { userStatus } = this.state
    const { user } = this.props
    console.log('header props: ', this.props)
    return (
      <header className="header">
        <NavLink className="logo-link"
          to="/"
        >
          <Logo />
        </NavLink>
        {!user.isLogined ? this.defaultMenu() : this.loginedMenu()}
      </header>
    )
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired
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
