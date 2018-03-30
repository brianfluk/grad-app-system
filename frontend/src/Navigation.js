import React, { Component } from 'react';
import './App.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
} from 'reactstrap';
import NavLink from './nav_link';
import Cookies from 'universal-cookie';

    
class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            usertype: "",
            username: ""
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }
    /* need to include usertype in state so we can update it if necessary
    in order to re-render the component */
    componentWillMount() {
        const cookies = new Cookies();
        var type = cookies.get('user_type');
        if (type !== this.state.usertype) {
            this.setState({usertype: type})
        }
        var user_name = cookies.get('username');
        if (user_name !== this.state.username) {
            this.setState({username: user_name})
        }
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/" className="brand">Tickets Я Us</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink to="/tickets/">Tickets</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/gapf/">GAPF</NavLink>
                            </NavItem>
                        </Nav>
                        <span className="type-indicator">logged in as {this.state.username} ({this.state.usertype})</span>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/login">Login</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;