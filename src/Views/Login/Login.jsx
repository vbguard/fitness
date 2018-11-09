import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Wrapper from '../../components/Wrapper/Wrapper'
import styled from 'styled-components'
import CustomButton from '../../components/shared-ui/button/index'
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

  render() {
    return (
      <Wrapper>
        <LoginWrap>
          <LoginTitle>Вход</LoginTitle>
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
            <CustomButton type="submite">Вход</CustomButton>
          </Form>
        </LoginWrap>
      </Wrapper>
    )
  }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
