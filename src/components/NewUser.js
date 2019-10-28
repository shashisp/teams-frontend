import React from 'react';
import { connect } from "react-redux";
import { addUser } from "../actions";
import UserForm from "./UserForm";
import { withRouter } from 'react-router-dom';


class NewUser extends React.Component {

    onSubmit = values => {
        this.props.addUser(values);
        this.props.history.push("/");
    };

    render() {
        return (
            <div>
                <h3>Create new user</h3>
            <UserForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}


export default withRouter(connect(null, { addUser })(NewUser));