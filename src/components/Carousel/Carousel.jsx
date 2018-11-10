import React, { Component } from 'react'
import styled from 'styled-components'

const CarosuelWrap = styled.div``
const CarouselList = styled.div``
const CarosuelControll = styled.div``
const ButtonLeft = styled.button``
const ButtonRight = styled.button``
const Slide = styled.div``

class Carousel extends Component {
  render() {
    return (
      <CarosuelWrap>
        <CarouselList>
          <Slide>
            <h2>FirstSlide</h2>
          </Slide>
        </CarouselList>
        <CarosuelControll>
          <ButtonLeft/>
          <ButtonRight/>
        </CarosuelControll>
      </CarosuelWrap>
    )
  }
}


export default Carousel
