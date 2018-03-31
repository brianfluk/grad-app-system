import React, { Component } from 'react';
import '../App.css';
import { Container, Col, Row, Jumbotron } from 'reactstrap';
import UserProfile from '../UserProfile';
import TicketList from '../components/TicketList';
import TicketsView from './TicketsView';
import FacultyList from '../components/FacultyList';
import Login from '../Login';
import { Switch, Route } from 'react-router-dom';

class HomeView extends Component {
    constructor(props) {
      super(props);
      this.state = {users: [], tickets: []}
    }
  
    componentWillMount() {
      fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users }));
      fetch('/tickets')
        .then(res => res.json())
        .then(tickets => this.setState({ tickets }));
      console.log(this.state.tickets)
    }
      
    render() {
      return (
        <div className="App">
          <Jumbotron>
            <h1 className="display-2">Tickets Я Us</h1>
            <hr className="my-2" />
            <p className="lead">Your Graduate Application ticket-system</p>
          </Jumbotron>
          <Row>
            <Col md="3"></Col>
            <Col md="6">
              <Route exact path="/" component={Login}/>
              <Route path="/tickets" component={TicketsView}/>
            </Col>
            <Col md="3"></Col>
          </Row>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      );
    }
}

export default HomeView;
