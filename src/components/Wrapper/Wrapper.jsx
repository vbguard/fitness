import React from 'react'
import styled from 'styled-components'
import bgi from '../../assets/images/user-cabinet-bg.png'

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgi});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = props => (
  <Wrap>{props.children}</Wrap>
)

export default Wrapper
