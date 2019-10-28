import React from 'react'
import { Divider, Header, Image, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const UserCard = (props) => (
    <Segment>
        <a href="" className="avatar">
            <img alt src=""></img>
        </a>
        <div className="content">
            <Link to={`user/edit/${props.user.id}`} >
                <Header as='p' floated='right'>
                    {props.user.firstName} {props.user.lastName}
                </Header>
            </Link>

            <div className="metadata">
                {props.user.phone} {props.user.email}

            </div>

        </div>
    </Segment>
)

export default UserCard;