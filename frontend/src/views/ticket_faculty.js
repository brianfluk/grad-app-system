import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TicketListFaculty from '../components/TicketListFaculty';
import Cookies from 'universal-cookie';

class TicketFaculty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }
    componentDidMount() {
        var cookies = new Cookies();
        var user = cookies.get('username');
        this.setState({username: user});
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="display-4">Tickets</h1>
                        <TicketListFaculty username={this.state.username}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TicketFaculty;