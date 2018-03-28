import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import UserProfile from './UserProfile';

import HomeView from './views/HomeView';
import TicketsView from './views/TicketsView';
import GapfView from './views/GapfView';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';

import Cookies from 'universal-cookie';

class App extends Component {
  state = {users: [], tickets: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
    fetch('/tickets')
      .then(res => res.json())
      .then(tickets => this.setState({ tickets }));
      
    const cookies = new Cookies();
    cookies.set('myCat', 'Pacman', { path: '/' });
  }

  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path='/' component={HomeView}/>
          <Route exact path='/tickets' component={TicketsView}/>
          <Route exact path='/gapf' component={GapfView}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
