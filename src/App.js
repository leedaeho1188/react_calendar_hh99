import React from 'react'
import Main from './Main'
import {Route, Switch} from 'react-router-dom'
import {withRouter} from 'react-router'
import Upload from './Upload'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/upload" component={Upload} />
      </Switch>
    </div>
  )
}

export default (withRouter(App));
