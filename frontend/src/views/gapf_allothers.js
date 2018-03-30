import React, { Component } from 'react';
import { Container, Table } from 'reactstrap';
import Cookies from 'universal-cookie';

class GapfAllOthers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gapfs: [],
            username: ""
        }
    }
    componentDidMount() {
        fetch('/gapf')
            .then(res => res.json())
            .then(gapfs => this.setState({ gapfs }));

        console.log('gapfs: ', this.state.gapfs)
        const cookies = new Cookies();
        var user = cookies.get('username');
        if (user !== this.state.username) {
            this.setState({username: user});
        }
    }
    render() {
        return (
            <Container>
                <h1 className="display-4">GAPF Applications</h1>
                <Table>
                    <thead>
                        <tr key="gapfheader">
                            <th>Username</th>
                            <th>URL</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.gapfs.map(gapf =>
                            <tr key={gapf.username}>
                                <td>{ gapf.username }</td>
                                <td>{ gapf.url }</td>
                                <td>{ gapf.status }</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export default GapfAllOthers;