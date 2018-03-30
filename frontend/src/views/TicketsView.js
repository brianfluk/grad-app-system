import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Cookies from 'universal-cookie';
import TicketAssociate from './ticket_associate';
import TicketBudget from './ticket_budget';
import TicketFaculty from './ticket_faculty';
import TicketGrad from './ticket_grad';


class TicketsView extends Component {
    constructor(props) {
        super(props);

        const cookies = new Cookies();
        this.state = {usertype: ""}
    }

    /* need to include usertype in state so we can update it if necessary
    in order to re-render the component */
    componentWillMount() {
        const cookies = new Cookies();
        var type = cookies.get('user_type');
        if (type !== this.state.usertype) {
            this.setState({usertype: type})
        }
    }
    render() {
        switch(this.state.usertype) {
            case 'Faculty':
                // console.log(this.state.usertype == 'faculty')
                return (
                    <div>
                        <TicketFaculty />
                        current user type: {this.state.usertype}
                    </div>);
            case 'Associate Chair Graduate':
                return (
                    <div>
                        <TicketAssociate />
                        current user type: {this.state.usertype}
                    </div>);
            case 'Grad Office Staff':
                return (
                    <div>
                        <TicketGrad />
                        current user type: {this.state.usertype}
                    </div>);
            case 'Budget Director':
                return (
                    <div>
                        <TicketBudget />
                        current user type: {this.state.usertype}
                    </div>);
            default:
                return (
                    <div>
                        <TicketFaculty />
                        current user type: {this.state.usertype}
                    </div>);
        }
    }
}
  
export default TicketsView;