import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
import Cookies from 'universal-cookie';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.state = {
            username: "",
            password: "",
            type: ""
        };
    }

    handleTypeChange(e) {
        this.setState({type: e.target.value});
    }
    handleSubmit() {
        console.log('clicked');
        const cookies = new Cookies();
        console.log(this.state.type);
        cookies.set('user_type', this.state.type);
        cookies.set('username', document.getElementById('usernameid').value);
        window.location.href = `/`; // redirect in order to refresh navbar
    }
    
    render() {
        return (
            // <MuiThemeProvider>
            <Container>
                <h1 className="text-center display-4">Login</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label for="usernameid" sm={3}>Username</Label>
                        <Col sm={9}>
                            <Input type="username" name="username" bsSize="lg" id="usernameid" placeholder="Username" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="passwordid" sm={3}>Password</Label>
                        <Col sm={9}>
                            <Input type="password" name="password" bsSize="lg" id="passwordid" placeholder="Password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="typeid" sm={3}>User Type</Label>
                        <Col sm={9}>
                            <Input type="select" name="type" bsSize="lg" value={this.state.type} onChange={this.handleTypeChange} id="typeid" required>
                                <option value="" selected disabled hidden>No user type selected</option>
                                <option>Faculty</option>
                                <option>Associate Chair Graduate</option>
                                <option>Grad Office Staff</option>
                                <option>Budget Director</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <Button type="submit" color="info" className="login-button">Login</Button>
                </Form>
            </Container>
        );
    }
};

export default Login;