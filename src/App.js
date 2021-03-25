import React from 'react'
import Main from './Main'
import Upload from './Upload'
import Calendar from './Calendar'
import {Route, Switch} from 'react-router-dom'
import {withRouter} from 'react-router'



function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/calendar" component={Calendar} />
      </Switch>
    </div>
  )
}

export default (withRouter(App));
