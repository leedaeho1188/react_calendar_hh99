import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import styled from "styled-components";
import Modal from './Modal'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
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
  const [visible, isBtnOpen] = useState(true)
  const [status, isModalOpen] = useState(false)
  let calendar_list = []
  let complete_list = []

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
      hour = (hour-12)
    }
    setTodo(daily_schedule[0].title)
    setTime(hour+":"+minute)
    setDay(day)
    setDate(daily_schedule[0].date.split('T')[0])
    setId(id)
    isModalOpen(true)
  }

  const closeModal = () => {
    isModalOpen(false)
  }

  React.useEffect(() => {
    dispatch(getCalendarFB())
  }, [])

  calendar_list = schedule_list.map((r, idx) => {
    return {title: r.title, start: r.date, id: r.id}
  }) 
  
  complete_list = schedule_list.filter((r, idx) => {
    console.log(r.completed)
    if(r.completed === true){
      return {...complete_list, r}
    }
  })
  console.log(complete_list)
  if (!complete_list[0]){
    complete_list = null
  }

  


  return (
    <div>
      <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events = {visible ? calendar_list: complete_list}
          eventClick ={(info) => {
            openModal(info.event.id)
          }}
      />
      <AddBtn>
        <Fab color="primary" aria-label="add" variant="extended" onClick = {() => {
          props.history.push('/upload')
        }}>
          <AddIcon /> 일정추가
        </Fab>
      </AddBtn>
      {visible ? (
        <CompleteBtn>
          <Fab color="secondary" aria-label="add" variant="extended" onClick = {() => {
            isBtnOpen(false)
          }}>
            <DoneIcon/> 완료일정
          </Fab>
        </CompleteBtn>
      ): null}
      <EntireBtn>
        <Fab color="secondary" aria-label="add" variant="extended" onClick = {() => {
          isBtnOpen(true)
        }}>
          <DoneIcon/> 전체일정
        </Fab>
      </EntireBtn>
      <CalendarBtn>
        <Fab  aria-label="add" variant="extended" onClick = {() => {
          props.history.push('/calendar')
        }}>
          <CalendarTodayIcon/> &nbsp; 달력보기
        </Fab>
      </CalendarBtn>
      <Modal id ={id_info} date = {date_info} day = {day_info} time = {time_info} todo = {todo_info}  status = {status} close={closeModal} />
    </div>
  )
}

const AddBtn = styled.div`
  position: fixed;
  right: 10px;
  bottom: 100px;
  z-index: 10;
`
const CompleteBtn = styled.div`
  position: fixed;
  right: 10px;
  bottom: 160px;
  z-index: 10;
`
const EntireBtn = styled.div`
  position: fixed;
  right: 10px;
  bottom: 160px;
  z-index: 9;
`
const CalendarBtn = styled.div`
  position: fixed;
  left: 10px;
  bottom: 100px;
  z-index: 9;
`

export default Main;