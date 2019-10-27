import React from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';

class UsersList extends React.Component {
    render() {
        return (
            <div>
                <p>you have {this.props.users.length} team members</p>
                {this.props.users.map((user) => (
                    <UserCard key={user.id} user={user}></UserCard>
                ))}
        </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return { users: state.users };
}

export default connect(mapStatetoProps)(UsersList);