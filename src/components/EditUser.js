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
            <div>
                <h3>Edit user</h3>
                <UserForm initialValues={this.props.user} onSubmit={this.onSubmit} />
                <button type="submit" onClick={this.deleteUser} className="btn btn-danger">delete</button>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return { user: state.users.users[ownProps.match.params.id]};
}
  
  export default connect(
    mapStateToProps,
    { selectUser, editUser, deleteUser }
  )(EditUser);