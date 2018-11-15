import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import MyEvents from './events'
import './styles.scss'

const localizer = BigCalendar.momentLocalizer(moment)

const Calendar = () => (
  <div className="calendar__wrapper">
    <BigCalendar
      endAccessor="end"
      events={MyEvents}
      localizer={localizer}
      startAccessor="start"
      style={{backgroundColor: 'white'}}
    />
  </div>
)

export default Calendar
