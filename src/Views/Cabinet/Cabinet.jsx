/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { Component } from 'react'
import './styles.scss'
import styled from 'styled-components'
import bg from '../../assets/images/user-cabinet-bg.png'
import { connect } from 'react-redux'
import { logout, getUser } from '../../redux/actions/userActions'
import CustomCalendar from '../../components/Calendar/Calendar'
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
const UserInfo = styled.div`
  width: 229px;
  height: 285px;
  box-shadow: 0 0 25px 2px #ede952;
  background-color: #231f20;
  margin-right: 30px;
  align-self: flex-start;
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
    if (this.props.user === null ) {
      this.props.history.push('/login')
    }
  }

  handleSome = () => {};

  render() {
    const { userMainPage, user } = this.state
    console.log(user)
    return (
      <BackgroundImage>
        {userMainPage ? (
          <MainWrapper>
            <UserInfo>
              <img alt="user avatar"
                src="https://lh5.googleusercontent.com/-GEoP_d8BzVc/AAAAAAAAAAI/AAAAAAABrII/UrwUA76z1cE/photo.jpg"
              />
              {user ? (<h3>{user.user.displayName}</h3>) : ''}
            </UserInfo>
            <CalendarWrap>
              <CustomCalendar/>
            </CalendarWrap>
          </MainWrapper>
        ) : (
          <Wrapper>
            <p>Resultat</p>

          </Wrapper>
        )}
      </BackgroundImage>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, {logout, getUser})(Cabinet)
