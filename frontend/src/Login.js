import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
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
        }
    }

    handleTypeChange(e) {
        this.setState({type: e.target.value});
    }
    handleSubmit() {
        console.log('clicked');
        
        const cookies = new Cookies();
        // cookies.set('user_type', )
        console.log(this.state.type);
        cookies.set('user_type', this.state.type);
    }
    
    render() {
        return (
            <Container>
                <Form>
                    <FormGroup>
                        <Label for="usernameid">Username</Label>
                        <Input type="username" name="username" id="usernameid" placeholder="username" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="passwordid">Password</Label>
                        <Input type="password" name="password" id="passwordid" placeholder="password" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="typeid">type</Label>
                        <Input type="type" name="type" id="typeid" value={this.state.type} onChange={this.handleTypeChange} placeholder="user type" />
                    </FormGroup>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </Container>
        );
    }
};

export default Login;