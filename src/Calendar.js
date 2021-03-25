import React from 'react'
import {useState} from 'react';
import moment from 'moment';
import styled from 'styled-components'

function Calendar(){
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
                      <td key={index} style={{backgroundColor:'red'}} >
                        <span>{days.format('D')}</span>
                      </td>
                  );
                }else if(days.format('MM') !== today.format('MM')){
                  return(
                      <td key={index} style={{backgroundColor:'gray'}} >
                        <span>{days.format('D')}</span>
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
      <div className="control">
        <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }}>이전달</button>
        <span>{today.format('YYYY년 MM월')}</span> 
        <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }}>다음달</button>
      </div>
      <table>
        <tbody>
          {calendarArr()}
        </tbody>
      </table>
    </>
  )
}


const Component = styled.div`
  
`

export default Calendar

