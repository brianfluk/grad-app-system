import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Cookies from 'universal-cookie';

class GapfFaculty extends Component {
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
                {this.state.gapfs.map(gapf =>
                    <div>username: {gapf.username}</div>
                    // { (gapf.username == this.state.username)
                    // ? "yes"
                    // : "no"
                    // }
                )}
                stuff

            </Container>
        );
    }
}

export default GapfFaculty;