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
                        <h1 className="display-4">Faculty</h1>
                        <FacultyList />
                    </Col>
                    <Col md={6}>
                        <h1 className="display-4">Tickets</h1>
                        <TicketList />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TicketBudget;