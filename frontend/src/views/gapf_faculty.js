import React, { Component } from 'react';
import { Container, Table, Input, Row, Col, Button } from 'reactstrap';
import Cookies from 'universal-cookie';
import { Jumbotron } from 'reactstrap';

class GapfFaculty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gapf: {},
            username: ""
        }
    }
    componentDidMount() {
        const cookies = new Cookies();
        var user = cookies.get('username');
        /* only update state if necessary */
        if (user !== this.state.username) {
            this.setState({username: user});
        }

        let query = "/gapf/find?q=" + user;
        fetch(query)
            .then(res => res.json())
            .then(gapf => this.setState({ gapf }));
    }
    render() {
        return (
            <Container>
                <h1 className="display-4">Your GAPF Application</h1>
                <Table>
                    <thead>
                        <tr key="gapfheader">
                            <th>Username</th>
                            <th>URL</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={this.state.gapf.username}>
                            <td>{this.state.gapf.username}</td>
                            <td>{this.state.gapf.url}</td>
                            <td>{this.state.gapf.status}</td>
                        </tr>
                    </tbody>
                </Table>
                <br/>
                <br/>
                <br/>
                <Jumbotron>
                <Row>
                    <Col sm={4}>
                        <h5>Submit your GAPF:</h5>
                    </Col>
                    <Col sm={6}>
                        <Input type="text" />
                    </Col>
                    <Col sm={2}>
                        <Button color="info">Submit</Button>
                    </Col>
                </Row>
                </Jumbotron>
            </Container>
        );
    }
}

export default GapfFaculty;