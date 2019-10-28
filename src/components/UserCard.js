import React from 'react'
import { Divider, Header, Image, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const UserCard = (props) => (
    <Segment>
        <Image src='https://s3.amazonaws.com/uifaces/faces/twitter/joelhelin/128.jpg' />


        <Link to={`user/edit/${props.user.id}`} >
            <Header as='p' floated='right'>
                {props.user.firstName} {props.user.lastName}
            </Header>
        </Link>
        <p>
            {props.user.phone}
        </p>
        <p>
            {props.user.email}
        </p>

        <Divider clearing />
    </Segment>
)

export default UserCard;