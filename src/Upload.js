import React from "react"
import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




function Upload(props) {

  const time_text = React.useRef();
  const input_text = React.useRef();


  return (
    <div>
      <Component/>
      <Container>
        <Headline>일정 추가</Headline>

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
          console.log(input_text.current.value)
          console.log(time_text.current.value) 
        }}>
          ADD Schedule
        </Button>
      </Container>
    </div>
  )
}

const Component = styled.div`
  opacity: 0.3;
  height: 100vh;
  width: 100vw;
  background-color: silver;
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
`
const Headline = styled.h1`


`


export default Upload