/* eslint-disable no-console */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './styles.scss'

const UserInfoWrap = styled.div`
  width: 229px;
  height: 285px;
  box-shadow: 0 0 25px 2px #ede952;
  background-color: #231f20;
  margin-right: 30px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class UserInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { userData } = this.props
    console.log(this.props)
    return (
      <UserInfoWrap>
        {userData ? (
          <div className="user__content">

            <div className="avatar__wrap">
              <img alt="user avatar"
                className="avatar"
                src={userData.photoURL}
              />
            </div>
            <h3 className="user__title">{userData.displayName}</h3>
          </div>
        ) : ''}
      </UserInfoWrap>
    )
  }
}

UserInfo.protoTypes = {
  userData: PropTypes.objectOf.isRequired
}


export default UserInfo
