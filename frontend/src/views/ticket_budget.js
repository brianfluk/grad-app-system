import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TicketList from '../components/TicketList';
import FacultyList from '../components/FacultyList';

class TicketBudget extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={6}>
                        <h1>Users</h1>
                        <FacultyList />
                    </Col>
                    <Col md={6}>
                        <h1>Tickets</h1>
                        <TicketList />
                        <div> ticket for budget director </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TicketBudget;