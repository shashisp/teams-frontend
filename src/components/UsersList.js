import React from "react";
import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";
import UserCard from "./UserCard";
import Pluralize from "react-pluralize";
import { Link } from "react-router-dom";
import { selectUser } from "../actions";
import { getUsers } from "../actions";

class UsersList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <div className="ui center aligned icon header">
          You have{" "}
          <Pluralize
            singular={"team member"}
            plural={"team members"}
            count={users.length}
          />{" "}
        </div>
        <div className="ui right aligned header">
          <Link to={`users/new/`}>
            <Icon link name="plus" />
          </Link>
        </div>
        {users.map(user => (
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

const mapStateToProps = state => ({
  users: state.users.users
});

export default connect(
  mapStateToProps,
  { getUsers }
)(UsersList);
