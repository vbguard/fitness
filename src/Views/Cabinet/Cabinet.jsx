/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { Component } from 'react'
import './styles.scss'
import styled from 'styled-components'
import bg from '../../assets/images/user-cabinet-bg.png'
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/userActions'
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
const Calendar = styled.div`
  width: 837px;
  height: 685px;
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
    const { userMainPage } = this.state

    return (
      <BackgroundImage>
        {userMainPage ? (
          <MainWrapper>
            <UserInfo />
            <Calendar />
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

export default connect(mapStateToProps, {logout})(Cabinet)
