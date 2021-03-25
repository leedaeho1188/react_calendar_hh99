import React from 'react';




function NotFound(props){
  React.useEffect(()=>{
    window.alert("주소가 올바르지 않아요. 뒤로갈께요!😉")
    props.history.goBack()
  }, [])



  return null
}

export default NotFound