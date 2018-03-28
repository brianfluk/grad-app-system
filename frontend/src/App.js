import React, { Component } from 'react';
import './App.css';
import { Container, Col, Row } from 'reactstrap';
import Navigation from './Navigation';
import UserProfile from './UserProfile';
import Tickets from './TicketsRoute'
import Home from './HomeRoute'

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
      <Home />
    );
  }
}

export default App;
