import React from 'react'
import { Divider, Header, Image, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import faker from 'faker';

const UserCard = (props) => (
    <div className="ui raised very padded segment">
        <a href="" className="avatar">
            <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
            <Link to={`user/edit/${props.user.id}`} >
                <Header as='p' floated='right'>
                    {props.user.firstName} {props.user.lastName}
                </Header>
            </Link>

            <div className="metadata">
                <span className="phone">
                    {props.user.phone}
                </span>
                <span className="email">
                    {props.user.email}
                </span>

            </div>

        </div>
    </div>
)

export default UserCard;