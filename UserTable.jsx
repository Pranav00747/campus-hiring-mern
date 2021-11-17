import React from 'react';
import './Table1.css'
const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th id="th1">ID</th>
                    <th id="th1">Name</th>
                    <th id="th1">Company</th>
                    <th id="th1">Actions</th>
                </tr>
            </thead>
            <tbody>
                { props.users.length > 0 ? (
                    props.users.map(user => {
                        const {id, name, username} = user;
                        return (
                            <tr key={id}>
                                <td id="td1">{id}</td>
                                <td id="td1">{name}</td>
                                <td id="td1">{username}</td>
                                <td>
                                    <button onClick={() => props.deleteUser(id)}>Delete</button>
                                    <button onClick={() => props.editUser(id, user)}>Update</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td id="td1" colSpan={4}>No users found</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
    )
}

export default UserTable;