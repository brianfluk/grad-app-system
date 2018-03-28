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
        // this.props.history.push('/tickets')
        // this.props.history.push("/");
        window.location.href = `/`; // redirect in order to refresh navbar
    }
    
    render() {
        return (
            <Container>
                <Form>
                    <FormGroup row>
                        <Label for="usernameid" sm={3}>Username</Label>
                        <Col sm={9}>
                            <Input type="username" name="username" id="usernameid" placeholder="Username" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="passwordid" sm={3}>Password</Label>
                        <Col sm={9}>
                            <Input type="password" name="password" id="passwordid" placeholder="Password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="typeid" sm={3}>User Type</Label>
                        <Col sm={9}>
                            <Input type="select" name="type" value={this.state.type} onChange={this.handleTypeChange} id="typeid">
                                <option value="" selected disabled hidden>No user type selected</option>
                                <option>Faculty</option>
                                <option>Associate Chair Graduate</option>
                                <option>Grad Office Staff</option>
                                <option>Budget Director</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <Button onClick={this.handleSubmit} color="info" className="login-button">Login</Button>
                </Form>
            </Container>
        );
    }
};

export default Login;