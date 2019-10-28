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
            <div className="ui raised very padded text container segment">
                <h2 className="ui header">Create new user</h2>
            <UserForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}


export default withRouter(connect(null, { addUser })(NewUser));