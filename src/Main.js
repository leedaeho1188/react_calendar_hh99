import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import FloatBtn from './FloatBtn'
import Modal from './Modal'
import {useSelector, useDispatch} from "react-redux";
import {getCalendarFB} from "./redux/modules/calendar"


function Main(props) {
  const schedule_list = useSelector((state) => state.calendar.schedule)
  const dispatch = useDispatch()
  const [todo_info, setTodo] = useState()
  const [time_info, setTime] = useState()
  const [day_info, setDay] = useState()
  const [date_info, setDate] = useState()
  const [id_info, setId] = useState()
  const [status, isModalOpen] = useState(false)
  let calendar_list = []

  React.useEffect(() => {
    dispatch(getCalendarFB())
  }, [])

  calendar_list = schedule_list.map((r, idx) => {
    return {title: r.todo, start: r.date, id: r.id}
  }) 
  
  const openModal = (id) => {
    let daily_schedule = schedule_list.filter((schedule) => {
      if(schedule.id == id){
        return schedule
      }})
    let time = daily_schedule[0].date.split('T')[1]
    let hour = time.split(':')[0] 
    let minute = time.split(':')[1]
    let day = "오전"
    if (hour >= 12){
      day = "오후"
    }
    if(hour > 12){
      hour = "0"+(hour-12)
    }
    setTodo(daily_schedule[0].todo)
    setTime(hour+":"+minute)
    setDay(day)
    setDate(daily_schedule[0].date.split('T')[0])
    setId(id)
    isModalOpen(true)
  }

  const closeModal = () => {
    isModalOpen(false)
  }


  return (
    <div>
      <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events = {calendar_list}
          eventClick ={(info) => {
            openModal(info.event.id)
          }    //함수를 만들어서 모달창을 뜰 수 있게한다.
          }
      />
      <FloatBtn history = {props.history} />
      <Modal id ={id_info} history = {props.history} date = {date_info} day = {day_info} time = {time_info} todo = {todo_info}  status = {status} close={closeModal} />
    </div>
  )
}


export default Main;