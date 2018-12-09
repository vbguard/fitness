/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Calendar } from 'react-calendar-component'
import cx from 'classnames'
import moment from 'moment'
import 'moment/locale/nb'
import './styles.scss'
import leftBtnBgi from '../../assets/images/arrow-left-small.png'
import rightBtnBgi from '../../assets/images/arrow-right-small.png'
class CustomCalendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: moment()
    }
  }
  handleRenderDay = ({ day, classNames, onPickDate }) => (
    <div
      className={cx(
        'Calendar-grid-item',
        day.isSame(moment(), 'day') && 'Calendar-grid-item--current',
        classNames
      )}
      key={day.format()}
      onClick={e => onPickDate(day)}
    >
      <div className="day__wrap">
        {day.format('D')}
      </div>
    </div>
  )

  handleRenderHeader = ({ date, onPrevMonth, onNextMonth }) => {
    console.log(date)
    return (
      <div className="Calendar-header">
        <div className="calendar__controlle">
          <button onClick={onPrevMonth}
            style={{backgroundImage: `url(${leftBtnBgi})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}
          />
          <div className="Calendar-header-currentDate">
            {date.format('MMMM YYYY')}
          </div>
          <button onClick={onNextMonth}
            style={{backgroundImage: `url(${rightBtnBgi})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}
          />
        </div>
        <ul className="callendar-dayName__list">
          <li className="callendar-dayName__item"><p className="callendar-dayName__text">{'Monday'}</p></li>
          <li className="callendar-dayName__item"><p className="callendar-dayName__text">{'Tuesday'}</p></li>
          <li className="callendar-dayName__item"><p className="callendar-dayName__text">{'Wednesday'}</p></li>
          <li className="callendar-dayName__item"><p className="callendar-dayName__text">{'Thursday'}</p></li>
          <li className="callendar-dayName__item"><p className="callendar-dayName__text">{'Friday'}</p></li>
          <li className="callendar-dayName__item"><p className="callendar-dayName__text">{'Saturday'}</p></li>
          <li className="callendar-dayName__item"><p className="callendar-dayName__text">{'Sunday'}</p></li>
        </ul>
      </div>
    )}


  onChangeMonthSet = (date) => {
    this.setState({ date })
  }

  render() {
    return (
      <>
        <Calendar
          date={this.state.date}
          onChangeMonth={date => this.onChangeMonthSet(date)}
          onPickDate={date => console.log(date)}
          renderDay={this.handleRenderDay}
          renderHeader={this.handleRenderHeader}
        />
        <button className="carosuel__link"
          onClick={e => this.props.handleIsCalendar(e)}
          type="button"
        >
          {'Начать тренировку'}
        </button>
      </>
    )
  }
}

export default CustomCalendar
