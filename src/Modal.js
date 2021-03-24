import React from 'react'
import styled from "styled-components"
import {useDispatch} from "react-redux";
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { removeCalendarFB, updateCalendarFB } from './redux/modules/calendar';


function Modal({status, close, day,date, time, todo, id}) {
const dispatch = useDispatch()


  return (
    <>
      {status ? (
        <div>
          <Component onClick = {close} />
          <ModalContainer>
            <h1>MY SCHEDULE</h1>
            <div>
              {date} {day} {time}
            </div>
            <div>{todo}</div>
            <div>
              <Button variant="contained" color='secondary' onClick = {() => {
                dispatch(removeCalendarFB(id))
                close()
              }}>
                삭제하기
              </Button>
              <Button variant="contained" color='primary' style={{marginLeft : '20px'}} onClick= {()=> {
                dispatch(updateCalendarFB(id))
                close()
              }}>
                완료하기
              </Button>
            </div>
            <ExitBtn onClick = {close} >
              <CloseIcon/>
            </ExitBtn>
          </ModalContainer>
        </div>
      ): null}
    </>
  )
}

const Component = styled.div`
  position: fixed;
  top: 0;
  opacity: 0.4;
  height: 100vh;
  width: 100vw;
  background-color: silver;
  z-index: 10;
`

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 50vw;
  height: 50vh;
  border-radius: 10px;
  padding: 30px;
  z-index: 20;
  opacity: 1;
  box-shadow: 0 3px 6px rgba(0,0,0,0.12), 0 2px 5px rgba(0,0,0,0.24);
`
const ExitBtn = styled.button`
  position: fixed;
  right: 5px;
  top: 5px;
  background-color: white;
  outline: none;
  border: none;
  cursor: pointer;
`


export default Modal