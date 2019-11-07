import React from "react";
import { Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import faker from "faker";

const UserCard = props => (
  <Link to={`user/edit/${props.user.id}`}>
    <div className="ui raised very padded segment">
      <a href="" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <Header as="p" floated="right">
          {props.user.firstName} {props.user.lastName}{" "}
          {props.user.userType === "admin" ? "(admin)" : ""}
        </Header>

        <div className="metadata">
          <span className="phone">{props.user.phone}</span>
          <span className="email">{props.user.email}</span>
        </div>
      </div>
    </div>
  </Link>
);

export default UserCard;
