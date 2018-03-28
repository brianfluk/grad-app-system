import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TicketsView from './TicketsView'

// The Roster component matches one of two different routes
// depending on the full pathname
const Tickets = () => (
  <Switch>
    <Route exact path='/tickets' component={TicketsView}/>
  </Switch>
)


export default Tickets
