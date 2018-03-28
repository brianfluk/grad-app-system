import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Cookies from 'universal-cookie';


class TicketsView extends Component {
    render() {
        const cookies = new Cookies();
        var type = cookies.get('user_type')

        return(
            <Container>
                <h1> Those nice tickets go here </h1>
                { type }
            </Container>
        );
    }
}
  
export default TicketsView;