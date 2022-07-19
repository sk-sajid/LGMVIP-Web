import React from 'react';
import './Users.css';

const Users = (props) => {
    return (
        <div className='users'>
            {
                props.arr.map((user) => (
                    <div key="{user.id}" className='user'>
                        <pre>Name is {user.first_name +" "+user.last_name}</pre>
                        <pre>Email is {user.email}</pre>
                    </div>
                ))
            }
        </div>
    );
}

export default Users;