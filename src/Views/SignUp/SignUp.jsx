import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Wrapper from '../../components/Wrapper/Wrapper'
import styled from 'styled-components'
import { googleLogin, facebookLogin, twitterLogin, createAccount} from '../../redux/actions/userActions'
import CustomButton from '../../components/shared-ui/Button/CustomButton'
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



export class Login extends Component {
  static propTypes = {
    prop: PropTypes
  }

  constructor(props) {
    super(props)

    this.state ={}
  }

  handleFacebookRegister = (event) => {
    event.preventDefault()
    this.props.facebookLogin()
  }

  render() {
    return (
      <Wrapper>
        <LoginWrap>
          <LoginTitle>Регистрация</LoginTitle>
          <Form>
            <Input placeholder="Логин"
              required
              type="email"
            />
            <Input placeholder="Пароль"
              required
              type="password"
            />
            <Link className="login__link"
              to="/lost-password"
            >Забили пароль?</Link>
            <button onClick={e => this.handleFacebookRegister(e)}
              type="button"
            >
              <svg style={{width: '24px', height: '24px'}}
                viewBox="0 0 24 24"
              >
                <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z"
                  fill="#000000"
                />
              </svg></button>
            <CustomButton type="submit">Вход</CustomButton>
          </Form>
        </LoginWrap>
      </Wrapper>
    )
  }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = {
  googleLogin,
  facebookLogin,
  createAccount,
  twitterLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
