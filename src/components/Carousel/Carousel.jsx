/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react'
import Slider from 'react-slick'
import CustomButton from '../shared-ui/Button/CustomButton'
import Countdown from '../Countdown/Countdown'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import image01 from '../../assets/images/slider-background/bg.png'
import image02 from '../../assets/images/slider-background/bg2.png'
import './styles.scss'

function SampleNextArrow(props) {
  const { className, onClick } = props
  return (
    <div
      className={className}
      onClick={onClick}
      // style={{ ...style, display: 'block', background: 'red' }}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, onClick } = props
  return (
    <div
      className={className}
      onClick={onClick}
      // style={{ ...style, display: 'block', background: 'green' }}
    />
  )
}
class Carousel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: true,
      autoplay: false,
      autoplaySpeed: 10000,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }
    return (
      <Slider {...settings}>
        <div className="slide-wrap">
          <img alt="some"
            src={image01}
          />
          <div className="slide-content">
            <h3 className="slide-title">Хочешь привести себя в форму? Ведь до Нового года осталось</h3>
            <Countdown date={new Date('Dec 31, 2018 24:00:00').getTime()}/>
            <h3 className="slide-description">Тренируйся вместе с нами по готовой программе, следи за своими результатами и делись достижениями!</h3>
            <CustomButton>Вперед</CustomButton>
          </div>
        </div>
        <div className="slide-wrap">
          <img alt="some"
            src={image02}
          />
          <div className="slide-content">
            <h3 className="slide-title--second">Ознакомся с примером программы:</h3>
            <ul className="slide__list">
              <li className="slide__item"><p className="slide__text">Разминка</p></li>
              <li className="slide__item"><p className="slide__text">Класическое приседание</p></li>
              <li className="slide__item"><p className="slide__text">Выпады</p></li>
              <li className="slide__item"><p className="slide__text">Махи ногами в положении лёжа на спине</p></li>
              <li className="slide__item"><p className="slide__text">Пресс</p></li>
              <li className="slide__item"><p className="slide__text">Планка</p></li>
              <li className="slide__item"><p className="slide__text">Бег на месте</p></li>
              <li className="slide__item"><p className="slide__text--dots">...</p></li>
            </ul>
            <CustomButton>Интересно</CustomButton>
          </div>
        </div>
      </Slider>
    )
  }
}


export default Carousel
