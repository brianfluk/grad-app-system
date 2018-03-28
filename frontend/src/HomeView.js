import React, { Component } from 'react';
import './App.css';
import { Container, Col, Row } from 'reactstrap';
import UserProfile from './UserProfile';

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
          <Row>
            <Col md="6">
              <h1>Tickets</h1>
              <Row>
                <table>
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>username</th>
                      <th>status</th>
                      <th>name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.tickets.map(ticket =>
                      <tr>
                        <td>{ ticket.id }</td>
                        <td>{ ticket.username }</td>
                        <td>{ ticket.status }</td>
                        <td>{ ticket.recipient }</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </Row>
            </Col>
            <Col md="6">
              <h1>Users</h1>
              {this.state.users.map(user =>
                <div key={user.id}>{user.username}, {user.name}</div> 
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomeView;
