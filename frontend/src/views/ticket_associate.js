import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import TicketList from '../components/TicketList';

class TicketAssociate extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={4}>
                        <TicketList />
                    </Col>
                    <Col md={8}>
                        <div> ticket for associate chair graduate </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TicketAssociate;