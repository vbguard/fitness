import React, { Component } from 'react';

import { Carousel } from 'react-bootstrap';
import moment from 'moment';
import style from './styles.scss';
import image01 from './images/bg.png';
import image02 from './images/bg2.png';

// Formats digits to two digits (e.g. 05)
const formatTimerDigit = digit => (digit > 9 ? digit : `0${digit}`);

// Format the countdownText to include labels and set to blank when value is 0 (strict)
// When strict is true, set the value to blank when digit is 0
const formatCountdownTextLabel = (digit, label, strict) => {
  if (strict) return digit > 0 ? formatTimerDigit(digit) + label : '';
  return formatTimerDigit(digit) + label;
};

class Slider extends Component {
  state = {
    newYear: '2019',
    countdownText: '',
  };

  componentDidMount() {
    // Get the new year from state
    const { newYear } = this.state;
    // Call the timer function
    this.timer(newYear);
  }

  timer = newYear => {
    const eventTime = moment(
      `01-01-${newYear} 00:00:00`,
      'DD-MM-YYYY HH:mm:ss',
    ).unix();
    const currentTime = moment().unix();
    const diffTime = eventTime - currentTime;
    let duration = moment.duration(diffTime * 1000, 'milliseconds');
    const interval = 1000;

    if (diffTime > 0) {
      setInterval(() => {
        duration = moment.duration(
          duration.asMilliseconds() - interval,
          'milliseconds',
        );

        // Format the months/days/hours/mins/secs with labels
        const months = formatCountdownTextLabel(duration.months(), 'mo ', true);
        const days = formatCountdownTextLabel(duration.days(), 'd ', true);
        const hours = formatCountdownTextLabel(duration.hours(), 'h ', true);
        const mins = formatCountdownTextLabel(duration.minutes(), 'm ', true);
        const secs = formatCountdownTextLabel(duration.seconds(), 's ', false);

        this.setState({ countdownText: months + days + hours + mins + secs });
      }, interval);
    } else {
      this.setState({ countdownText: 'Happy New Year!' });
    }
  };

  render() {
    const { newYear, countdownText } = this.state;
    return (
      <Carousel interval={10000} className={style.carouselSize}>
        <Carousel.Item className={style.CarouselItem}>
          <img alt="100" src={image01} />
          <Carousel.Caption className={style.CarouselCaption}>
            <h3
            >{`Хочешь привести себя в форму? Ведь до ${newYear} Нового года осталось`}</h3>
            <h4>{countdownText}</h4>
            <p>
              Тренируйся вместе с нами по готовой программе, следи за своими
              результатами и делись достижениями!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={image02} />
          <Carousel.Caption className={style.CarouselCaption}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className={style.text}>
              bal Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Fugit itaque velit ratione error minima molestiae accusamus
              voluptatem. Hic, quisquam at!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slider;
