import React from 'react';
import { connect } from 'react-redux';
import { editUser, selectUser, deleteUser } from "../actions";
import UserForm from "./UserForm";

class EditUser extends React.Component {

    componentDidMount() {
        console.log(this.props.user);
    }

    onSubmit = values => {
        this.props.editUser(values);
        this.props.history.push("/");
    };

    deleteUser = () =>{
        this.props.deleteUser(this.props.user.id);
        this.props.history.push("/");
    }

    render() {
        if(!this.props.user){
            return <div>Loading ...</div>;
        }
        return (
            <div className="ui raised very padded text container segment">
                <h2 className="ui header">Edit user</h2>
                <UserForm initialValues={this.props.user} onSubmit={this.onSubmit} />
                <button type="submit" onClick={this.deleteUser} className="ui negative basic button">Delete</button>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return { user: state.users.users[ownProps.match.params.id-1]};
}
  
  export default connect(
    mapStateToProps,
    { selectUser, editUser, deleteUser }
  )(EditUser);