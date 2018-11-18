import React, { Component } from 'react'
import styled from 'styled-components'
import Wrapper from '../../components/Wrapper/Wrapper'
import bg from '../../assets/images/user-cabinet-bg.png'

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

class Exercises extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <BackgroundImage />
        <h1>DGHFDB</h1>
      </Wrapper>
    )
  }
}

export default  Exercises
