import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TicketListGrad from '../components/TicketListGrad';

class TicketGrad extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="display-4">Tickets</h1>
                        <TicketListGrad />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TicketGrad;