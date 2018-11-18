/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { Component } from 'react'
import './styles.scss'
import styled from 'styled-components'
import bg from '../../assets/images/user-cabinet-bg.png'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import CustomCalendar from '../../components/Calendar/Calendar'
import UserInfo from '../../components/UserInfo/UserInfo'
// import FacebookShare from '../../FacebookShare/FacebookShare'
// import CustomizedTable from '../../table/index'

const BackgroundImage = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bg}), no-repeat, 50% 50%;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainWrapper = styled.div`
  width: 1051px;
  height: 685px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  width: 1051px;
  height: 685px;
  z-index: 3;
  box-shadow: 0 0 25px 2px #ede952;
  background-color: #231f20;
`
const CalendarWrap = styled.div`
  width: 837px;
  height: 685px;
  padding: 33px;
  box-shadow: 0 0 25px 2px #ede952;
  background-color: #231f20;
`

class Cabinet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userMainPage: true,
      user: this.props.user
    }
  }
  componentDidMount = () => {
    console.log(this.props)
    if (!this.props.auth ) {
      this.props.history.push('/')
    }
  }

  handleSome = () => {};

  render() {
    const { auth } = this.props
    console.log(this.props)
    if (!auth.uid) return <Redirect to="/signin" />

    return (
      <BackgroundImage>
        <MainWrapper>
          <UserInfo userData={auth} />
          <CalendarWrap>
            <CustomCalendar/>
          </CalendarWrap>
        </MainWrapper>
      </BackgroundImage>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,

  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'execersice' },
  ])
)(Cabinet)
