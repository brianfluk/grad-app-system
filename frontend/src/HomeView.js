import React, { Component } from 'react';
import './App.css';
import { Container, Col, Row } from 'reactstrap';
import Navigation from './Navigation';
import UserProfile from './UserProfile';
import Tickets from './TicketsRoute'
import Home from './HomeRoute'

class HomeView extends Component {
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
      <div className="App">
        <Container>
          <Navigation />
          <Row>
            <Col md="6">
              <h1>Tickets</h1>
              {this.state.tickets.map(ticket =>
                <div key={ticket.id}>{ticket.id}, {ticket.username}, {ticket.status}, {ticket.recipient}</div> 
              )}
            </Col>
            <Col md="6">
              <h1>Users</h1>
              {this.state.users.map(user =>
                <div key={user.id}>{user.username}, {user.name}</div> 
              )}
            </Col>
          </Row>
        </Container>
        <Tickets />
      </div>
    );
  }
}

  export default HomeView;
