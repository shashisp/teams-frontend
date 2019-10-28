import React from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react'
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
        console.log(this.props)
        const { users } = this.props;
        return (
            <div>
                <Header>you have {users.length} team members <Link to={`users/new/`}><Icon link name='plus' /></Link> </Header>
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