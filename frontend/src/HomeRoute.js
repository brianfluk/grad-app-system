import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeView from './HomeView'
import TicketsView from './TicketsView'
import GapfView from './GapfView'


// The Roster component matches one of two different routes
// depending on the full pathname
const Home = () => (
  <Switch>
    <Route exact path='/' component={HomeView}/>
    <Route exact path='/tickets' component={TicketsView}/>
    <Route exact path='/gapf' component={GapfView}/>
  </Switch>
)


export default Home



