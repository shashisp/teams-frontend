import React from 'react';
import { connect } from 'react-redux';

class UsersList extends React.Component {
    render() {
        return (
            <div>
                <p>you have {this.props.users.length} team members</p>
                {this.props.users.map((user) => (
                    <div key={user.id}>{user.firstName} </div>

                ))}
        </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return { users: state.users };
}

export default connect(mapStatetoProps)(UsersList);