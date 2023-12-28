// import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../user/User';

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h3>our awesome users : {users.length}</h3>
           <div className='container'>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
           </div>
            
        </div>
    );
};

export default Users;