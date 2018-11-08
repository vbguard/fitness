import React, { Component } from 'react';
import './styles.scss';
// import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-animated-slider';
import moment from 'moment';
// import CustomButton from '../../shared-ui/button';
import image01 from './images/bg.png';
import image02 from './images/bg2.png';
import 'react-animated-slider/build/horizontal.css';

// Formats digits to two digits (e.g. 05)
const formatTimerDigit = digit => (digit > 9 ? digit : `0${digit}`);

// Format the countdownText to include labels and set to blank when value is 0 (strict)
// When strict is true, set the value to blank when digit is 0
const formatCountdownTextLabel = (digit, label, strict) => {
  if (strict) return digit > 0 ? formatTimerDigit(digit) + label : '';
  return formatTimerDigit(digit) + label;
};

class Carousel extends Component {
  state = {
    newYear: '2019',
    countdownText: '',
    content: [
      {
        title: 'Хочешь привести себя в форму? Ведь до Нового года осталось',
        description:
          'Тренируйся вместе с нами по готовой программе, следи за своими результатами и делись достижениями!',
        button: 'Вперед',
        image: image01,
        coldownTimer: true,
      },
      {
        title: 'Ознакомся с примером программы:',
        description: '...',
        button: 'Интересно',
        image: image02,
      },
    ],
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
        const days = formatCountdownTextLabel(duration.days(), ' d ', true);
        const hours = formatCountdownTextLabel(duration.hours(), 'h ', true);
        const mins = formatCountdownTextLabel(duration.minutes(), 'm ', true);
        const secs = formatCountdownTextLabel(duration.seconds(), 's ', false);
        // const allDay = formatCountdownTextLabel(duration.months(), '', true);
        this.setState({
          countdownText: days + hours + mins + secs,
        });
      }, interval);
    } else {
      this.setState({ countdownText: 'Happy New Year!' });
    }
  };

  render() {
    const { content, countdownText } = this.state;

    return (
      <Slider
        className="slider-wrapper"
        autoplay={3000}
        onSlideChange={event => console.log(event.slideIndex)}
      >
        {content.map((item, index) => (
          <div
            // eslint-disable-next-line
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
              backgroundSize: 'cover',
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              {item.coldownTimer ? countdownText : ''}
              <p>{item.description}</p>
              <button type="button">{item.button}</button>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}

export default Carousel;
