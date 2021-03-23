import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import FloatBtn from './FloatBtn'


function Main(props) {
  console.log(props.history)
  return (
    <div>
      <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
      />
      <FloatBtn history ={props.history} />
    </div>
  )
}

export default Main;