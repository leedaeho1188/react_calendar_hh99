import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import FloatBtn from './FloatBtn'
import {useSelector, useDispatch} from "react-redux";
import {getCalendarFB} from "./redux/modules/calendar"


function Main(props) {
  const schedule_list = useSelector((state) => state.calendar.schedule)
  const dispatch = useDispatch()


  React.useEffect(() => {
    dispatch(getCalendarFB())
  }, [])
  let calendar_list = []
  calendar_list = schedule_list.map((r, idx) => {
    return {title: r.todo, start: r.date}
  }) 

  return (
    <div>
      <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events = {calendar_list}
      />
        
      <FloatBtn history ={props.history} />
    </div>
  )
}

export default Main;