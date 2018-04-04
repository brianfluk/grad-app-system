// render columns based on props
import React, { Component } from 'react';
import { Row, Button, Input, Form, FormGroup, Col, Table } from 'reactstrap';

class TicketListGrad extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [], tickets: [] }
    }

    componentWillMount() {
        fetch('/tickets')
            .then(res => res.json())
            .then(tickets => this.setState({ tickets }));
    }
    render() {
        return (
            <div>
                <Row>
                    <Table>
                        <thead>
                            <tr key="ticketheader">
                                <th>id</th>
                                <th>username</th>
                                <th>status</th>
                                <th>name</th>
                                <th>Approved by Chair</th>
                                <th>Accepted/Rejected</th>
                                <th>Process</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tickets.map(ticket =>
                                <tr key={ticket.id}>
                                    <td>{ticket.id}</td>
                                    <td>{ticket.username}</td>
                                    <td>{ticket.status}</td>
                                    <td>{ticket.recipient}</td>
                                    <td>{ticket.chair_approved}</td>
                                    <td>{ticket.accept}</td>
                                    {(ticket.chair_approved==="true" && ticket.status==="offer-request")
                                        ? <td><Button color="success">Send Offer</Button></td>
                                        : null
                                    } {(ticket.status==="offer-pending" && (ticket.accept==="accept" || ticket.accept==="reject"))
                                        ? <td><Button color="info">Process Response</Button></td>
                                        : <td> </td>
                                    }
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Row>
            </div>
        );
    }
}

export default TicketListGrad;