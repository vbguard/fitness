/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import cx from 'classnames'
import createDateObjects from './createDateObjects'
import './styles.scss'

export default class Calendar extends Component {
  // static propTypes = {
  //   /** Week offset*/
  //   weekOffset: PropTypes.number.isRequired,
  //   /** The current date as a moment objecct */
  //   date: PropTypes.object.isRequired,
  //   /** Function to render a day cell */
  //   renderDay: PropTypes.func,
  //   /** Function to render the header */
  //   renderHeader: PropTypes.func,
  //   /** Called on next month click */
  //   onNextMonth: PropTypes.func,
  //   /** Called on prev month click */
  //   onPrevMonth: PropTypes.func,
  //   /** Called when some of the navigation controls are clicked */
  //   onChangeMonth: PropTypes.func,
  //   /** Called when a date is clicked */
  //   onPickDate: PropTypes.func,
  //   /** classname for div wrapping the whole calendar */
  //   containerClassName: PropTypes.string,
  //   /** classname for the div wrapping the grid */
  //   contentClassName: PropTypes.string
  // };

  static defaultProps = {
    weekOffset: 0,
    date: moment(),
    renderDay: ({ day, classNames, onPickDate }) => (
      <div
        className={cx(
          'Calendar-grid-item',
          day.isSame(moment(), 'day') && 'Calendar-grid-item--current',
          classNames
        )}
        key={day.format()}
        onClick={e => onPickDate(day)}
      >
        {day.format('D')}
      </div>
    ),
    renderHeader: ({ date, onPrevMonth, onNextMonth }) => (
      <div className="Calendar-header">
        <button onClick={onPrevMonth}>«</button>
        <div className="Calendar-header-currentDate">
          {date.format('MMMM YYYY')}
        </div>
        <button onClick={onNextMonth}>»</button>
      </div>
    )
  };
  constructor(props) {
    super(props)
    this.state = {
      date: moment()
    }
  }


  handleNextMonth = () => {
    if (this.props.onNextMonth) {
      return this.props.onNextMonth()
    }

    this.props.onChangeMonth(this.state.date.clone().add(1, 'months'))
  };

  handlePrevMonth = () => {
    if (this.props.onPrevMonth) {
      return this.props.onPrevMonth()
    }

    this.props.onChangeMonth(this.state.date.clone().subtract(1, 'months'))
  };

  render() {
    const {
      date,
      weekOffset,
      renderDay,
      renderHeader,
      onPickDate,
      contentClassName,
      containerClassName
    } = this.props

    return (
      <div className={cx('Calendar', containerClassName)}>
        {renderHeader({
          date,
          onPrevMonth: this.handlePrevMonth,
          onNextMonth: this.handleNextMonth
        })}
        <div className={cx('Calendar-grid', contentClassName)}>
          {createDateObjects(date, weekOffset).map((day, i) =>
            renderDay({ ...day, onPickDate })
          )}
        </div>
      </div>
    )
  }
}
