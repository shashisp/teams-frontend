import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react'
import UserCard from './UserCard';
import { Link } from "react-router-dom";
import { selectUser } from '../actions'
import { getUsers } from "../actions";

class UsersList extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const { users } = this.props;
        return (
            <div>
                <div className="ui center aligned icon header">You have {users.length} team members </div>
                <div className="ui right aligned header"><Link to={`users/new/`}><Icon link name='large plus' /></Link></div>
                {users.map((user) => (
                    <UserCard
                        onClick={() => selectUser(user)}
                        user={user}
                        key={user.id}
                    ></UserCard>
                ))}
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    users: state.users.users
});


export default connect(
    mapStateToProps,
    { getUsers }
)(UsersList);