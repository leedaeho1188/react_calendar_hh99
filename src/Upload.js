import React from "react"
import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import {useDispatch} from "react-redux"
import { addCalendarFB } from "./redux/modules/calendar";




function Upload(props) {

  const time_text = React.useRef();
  const input_text = React.useRef();
  const dispatch = useDispatch();
  console.log(time_text.current)
  console.log(input_text.current)

  return (
    <div>
      <Component/>
      <Container>
        <h1>일정 추가</h1>

        <TextField
          inputRef ={time_text}
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          defaultValue="0000-00-00T00:00"
          InputLabelProps={{
            shrink: true,
          }}/>
          
        <TextField id="standard-basic" label="일정을 입력해주세요." inputRef ={input_text} />
        <Button variant="contained" color="primary" onClick = {() => {
          let schedule = {
            date_time: time_text.current.value,
            todo: input_text.current.value,
          }
          if (!time_text.current.value){
            window.alert("날짜를 선택해주세요!😗")
          } 
          else if (!input_text.current.value){
            window.alert("일정을 입력해주세요!🤨")
          }
          else {
            dispatch(addCalendarFB(schedule))
            window.setTimeout(()=>{
              props.history.push('/')
            }, 1000)
          }
        }}>
          추가하기
        </Button>
        <ExitBtn onClick = {() => {
        props.history.push('/')
        }}>
          <CloseIcon/>
        </ExitBtn>
      </Container>
    </div>
  )
}

const Component = styled.div`
  opacity: 0.3;
  height: 100vh;
  width: 100vw;
  background-color: silver;
  z-index: 8;
`

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50vw;
  max-width: 700px; 
  height: 50vh;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  border-radius: 10px;
  justify-content: space-between;
  padding: 30px;
  align-items: center; 
  flex-direction: column; 
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


export default Upload