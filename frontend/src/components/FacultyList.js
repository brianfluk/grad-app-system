// render columns based on props
import React, { Component } from 'react';
import { Row, Input, Button, Form, Table } from 'reactstrap';
import $ from 'jquery'; 

class FacultyList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users: [], 
            tickets: [] 
        }
    }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }
    render() {
        return (
            <div>
                <h2> Grant Table</h2>
                <Table>
                    <thead>
                        <tr key="facultyheader">
                            <th>Full Name</th>
                            <th>no. Domestic</th>
                            <th>no. International</th>
                            <th> Grant </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user =>
                            <tr id="granter" key={user.id}>
                                <td>{user.name}</td>
                                <td id="r1"><Input type="number"/></td>
                                <td id="r2"><Input type="number"/></td>
                                <td id="r3"><Button color="info" onClick={() => runner(user.name)}>Grant</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <h2> Edit Table</h2>
                <Table>
                    <thead>
                        <tr key="facultyheader">
                            <th>Full Name</th>
                        </tr>
                    </thead>
                    <tbody id="editTable">

                        {this.state.users.map(user =>
                            <tr id="adder" key={user.id}>
                            

                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        );
    }
}
function runner (user) {
    
    var newtr1 = "<tr> <td>"+user+"</td>"
    var newtr2 = "<td><Button color='info'>Edit</Button></td> </tr>"
    $("#granter").remove();
    $("#editTable").append(newtr1 + newtr2)

}

export default FacultyList;