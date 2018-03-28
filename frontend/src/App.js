import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import UserProfile from './UserProfile';

import HomeView from './HomeView';
import TicketsView from './TicketsView';
import GapfView from './GapfView';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {users: [], tickets: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
    fetch('/tickets')
      .then(res => res.json())
      .then(tickets => this.setState({ tickets }));
  }

  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path='/' component={HomeView}/>
          <Route exact path='/tickets' component={TicketsView}/>
          <Route exact path='/gapf' component={GapfView}/>
        </Switch>
      </div>
    );
  }
}

export default App;
