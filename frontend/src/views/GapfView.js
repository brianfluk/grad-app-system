import React from 'react';
import { Component } from 'react';
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom'; 
import UserProfile from '../UserProfile';
import Cookies from 'universal-cookie';
import GapfFaculty from './gapf_faculty';
import GapfAllOthers from './gapf_allothers';

class GapfView extends Component {
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
                        <GapfFaculty />
                    </div>);
            default:
                return (
                    <div>
                        <GapfAllOthers />
                    </div>);
        }
    }
}
  
export default GapfView;