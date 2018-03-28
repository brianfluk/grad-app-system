import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TicketList from '../components/TicketList';

class TicketGrad extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <TicketList />
                        <div> ticket for graduate office staff </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TicketGrad;