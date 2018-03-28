// render columns based on props
import React, { Component } from 'react';
import { Row } from 'reactstrap';

class FacultyList extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [], tickets: [] }
    }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }
    render() {
        return (
            <div>
                <h1>Users</h1>
                <table>
                    <thead>
                        <tr key="facultyheader">
                            <th>Username</th>
                            <th>Full Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user =>
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.name}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FacultyList;