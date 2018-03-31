import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import TicketList from '../components/TicketList';
import "../App.css";

class TicketAssociate extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={4}>
                        <h1 className="display-4">Tickets</h1>
                        <TicketList />
                    </Col>
                    <Col md={8}>
                        <h1 className="display-4">Other Tickets</h1>
                        <TicketList />
                        <Button color="success" className="full-width">Approve</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TicketAssociate;