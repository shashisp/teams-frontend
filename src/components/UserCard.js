import React from 'react'
import { Divider, Header, Image, Segment } from 'semantic-ui-react'

const UserCard = (props) => (
    <Segment>
        <Image src='https://s3.amazonaws.com/uifaces/faces/twitter/joelhelin/128.jpg' />
        <Header as='p' floated='right'>
            {props.user.firstName}
        </Header>
        <p>
            {props.user.firstName} {props.user.lastName}
        </p>
        <p>
            {props.user.phone}
        </p>
        <p>
            {props.user.email}
        </p>

        {/* <Divider clearing /> */}
    </Segment>
)

export default UserCard;