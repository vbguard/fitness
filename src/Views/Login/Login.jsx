/* eslint-disable no-console */
import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Wrapper from '../../components/Wrapper/Wrapper'
import styled from 'styled-components'
import { signIn, signInFacebook } from '../../redux/actions/userActions'
import './styles.scss'


const LoginWrap = styled.div`
  width: 493px;
  height: 397px;
  background-color: #231f20;
  padding-top: 32px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 32px;
  box-shadow: 0 0 20px 0 #ede952;
`

const LoginTitle = styled.h2`
  font-size: 26px;
  font-family: "Comfortaa";
  color: rgb(237, 233, 82);
  font-weight: bold;
  line-height: 1.038;
  text-align: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
width: 271px;
border: none;
border-bottom: 2px solid rgba(241,242,242, 0.5);
background-color: transparent;
outline: none;
padding-bottom: 7px;
padding-top: 7px;
margin-bottom: 24px;
font-size: 16px;
font-family: "Roboto";
color: rgb(255, 255, 255);
line-height: 1.688;
&::placeholder {
  font-size: 16px;
  font-family: "Roboto";
  color: rgb(255, 255, 255);
  line-height: 1.688;
}
`
class Login extends Component {
  constructor(props) {
    super(props)

    this.state ={
      email: '',
      password: '',
      error: ''
    }
  }

  submitLogin(event) {
    event.preventDefault()
    const {email, password} = this.state
    this.props.signIn({ email, password})
  }

  handleGoogleLogin = event => {
    event.preventDefault()
    this.props.signInFacebook()
  }

  render() {
    const errStyle = {
      borderColor: 'red'
    }
    const { auth, authError } = this.props
    if (auth.uid) return <Redirect to="/" />
    return (
      <Wrapper>
        <LoginWrap>
          <LoginTitle>Вход</LoginTitle>
          <Form onSubmit={e => this.submitLogin(e)}>
            <Input
              onChange={(event) => this.setState({ email: event.target.value })}
              placeholder="Логин"
              required
              style={this.state.error ? errStyle : null}
              type="email"
            />
            <Input onChange={event => this.setState({ password: event.target.value })}
              placeholder="Пароль"
              required
              style={this.state.error ? errStyle : null}
              type="password"
            />
            {authError && <div>Your username/password is incorrect</div>}
            <NavLink className="login__link"
              to="/lost-password"
            >Забили пароль?</NavLink>
            <button className="carousel__link"
              type="submit"
            >Вход</button>
          </Form>
          <button onClick={e => this.handleGoogleLogin(e)}
            type="button"
          >Facebook Login</button>
        </LoginWrap>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  authError: state.auth.authError,
  auth: state.firebase.auth
})


const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    signInFacebook: () => dispatch(signInFacebook())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
