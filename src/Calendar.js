import React from 'react'
import {useState} from 'react';
import moment from 'moment';
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';

function Calendar(props){
const [getMoment, setMoment] = useState(moment())
const today = getMoment
const firstWeek = today.clone().startOf('month').week();
const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

const calendarArr=()=>{

  let result = [];
  let week = firstWeek;
  for ( week; week <= lastWeek; week++) {
    result = result.concat(
      <tr key={week}>
        {Array(7).fill(0).map((data, index) => {
                let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
                if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                  return(
                      <td key={index} style={{color:'red'}} >
                        <span>{days.format('D')}</span>
                      </td>
                  );
                }else if(days.format('MM') !== today.format('MM')){
                  return(
                      <td key={index}>
                        <span style={{color:'silver'}}>{days.format('D')}</span>
                      </td>
                  );
                }else{
                  return(
                      <td key={index}>
                        <span>{days.format('D')}</span>
                      </td>
                  );
                }
              })
        }
      </tr>);
  }
  return result;
}

  return (
    <>
      <Component onClick = {() => {
        props.history.push('/')}}/>
      <Cal_Container>
        <div className="control">
          <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }}>이전달</button>
          &nbsp;&nbsp;<span>{today.format('YYYY년 MM월')}</span>&nbsp;&nbsp;
          <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }}>다음달</button>
        </div>
        <table>
            <tr>
              <th>일<Day>요일</Day></th>
              <th>월<Day>요일</Day></th>
              <th>화<Day>요일</Day></th>
              <th>수<Day>요일</Day></th>
              <th>목<Day>요일</Day></th>
              <th>금<Day>요일</Day></th>
              <th>토<Day>요일</Day></th>
            </tr>
            {calendarArr()}
        </table>
        <ExitBtn onClick = {() => {
        props.history.push('/')
        }}>
          <CloseIcon/>
        </ExitBtn>
      </Cal_Container>
    </>
  )
}


const Component = styled.div`
  opacity: 0.3;
  height: 100vh;
  width: 100vw;
  background-color: silver;
`
const Cal_Container = styled.table`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50vw;
  max-width: 800px; 
  height: 80vh;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  padding: 30px;
  align-items: center; 
  flex-direction: column; 
  box-shadow: 0 3px 6px rgba(0,0,0,0.12), 0 2px 5px rgba(0,0,0,0.24);
  & > table {
    border-collapse: collapse;
    width: 100%;
    height: 70%
  }
  & > .control {
    margin-bottom : 50px
  }
  & > .control > button {
    border-radius: 12px;
    padding: 4px 8px;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: #ffcdd2;
    box-shadow: 0 2px 4px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.24);
  }
  & > .control > button: hover{
    font-weight: bold;
    background-color: #f48fb1;

  }
  & > .control > span {
    padding: 4px 8px;
    border-radius: 10px;
    font-weight: bold;
  }
  @media (max-width:1200px){
    width: 100vw;
  }
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
const Day = styled.span`
  @media (max-width:425px){
    display: none
  }
`

export default Calendar

