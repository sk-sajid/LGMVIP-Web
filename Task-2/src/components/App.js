import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Users from './Users';

const App = () => {
    const [users,setUsers] = useState([]);
    const loadUsers = async () => {
        const res = await axios.get("https://reqres.in/api/users?page=1");
        console.log(res.data.data);
        setUsers(res.data.data);
    }
    return (
        <div className='App'>
            <div className='navbar'>
                <h3>Task-2</h3>
                <button onClick={loadUsers}>Get Users</button>
            </div>
            <Users arr = {users}/>
        </div>
    );
}

export default App;