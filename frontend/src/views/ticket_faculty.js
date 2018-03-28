import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TicketListFaculty from '../components/TicketListFaculty';

class TicketFaculty extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <TicketListFaculty />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TicketFaculty;