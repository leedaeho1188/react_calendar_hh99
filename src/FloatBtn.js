import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styled from "styled-components";

function FloatBtn({history}) {
  return(
    <AddBtn>
      <Fab color="primary" aria-label="add" variant="extended" onClick = {() => {
        history.push('/upload')
      }}>
        <AddIcon /> 일정추가
      </Fab>
    </AddBtn>
  )
}

const AddBtn = styled.div`
  position: fixed;
  right: 10px;
  bottom: 100px;
  z-index: 10;
`


export default FloatBtn