import React from 'react'
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export const UsersList = ({ users, handleDelete }) => {
    const userItems = users.map( user => 
        <ListGroupItem key={user.id}>
            <section style={{display: 'flex'}}>
                <div style={{flexGrow: 1, margin: 'auto 0'}}>
                    {user.firstName} {user.lastName}
                </div>
                <div>
                    <Button outline color="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
                </div>
            </section>
        </ListGroupItem>
    );

    return (
        <ListGroup>
            { userItems }
        </ListGroup>
    )
}