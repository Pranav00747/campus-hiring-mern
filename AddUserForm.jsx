import React, {useState} from 'react';
import './Text1.css'

const AddUserForm = (props) => {

    const initUser = {id: null, name: '', username: ''};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) {
            handleChange(e, props.addUser(user));
            alert("Registered sucessfully added.")
        }
    }

    return (
        <form>
            <label  id="SmallText">Name </label>
            <input className="u-full-width" type="text" align ="center" value={user.name} name="name" onChange={handleChange} /><p></p>
            <label  id="SmallText">Company </label>
            <input  className="u-full-width" type="text" align="center" vvalue={user.username} name="username" onChange={handleChange} /><p></p>
            <button className="button-primary" type="submit" onClick={handleSubmit} >Register</button>
        </form>
    )
}

export default AddUserForm;