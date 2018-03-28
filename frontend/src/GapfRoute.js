import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GapfView from './GapfView'

// The Roster component matches one of two different routes
// depending on the full pathname
const Gapf = () => (
  <Switch>
    <Route exact path='/gapf' component={GapfView}/>
  </Switch>
)


export default Gapf
