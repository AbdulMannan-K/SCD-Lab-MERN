import React, {useEffect, useState} from 'react';
import {Form, useForm} from "../components/useForm";
import Input from "../components/controls/Input";
import Button from "../components/controls/button";
import axios from "axios";

const initialValues = {
    name:"",
    password:""
}

const Users = () => {

    const [users,setUsers] = useState([]);

    const {values,handleInputChange} = useForm(initialValues)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        await axios.post('http://localhost:3001/users', {
            values
        }).then(function (response) {
            setUsers(response.data)
        })
    };

    useEffect(() => {
        const load = async ()=>{
            let data = await axios.get('http://localhost:3001/users');
            setUsers(data.data);
        }
        load();
    },[])

    return (
        <div>
            <Form>
                <Input name="name" value={values.name} label="Name" onChange={handleInputChange} ></Input>
                <Input name="password" value={values.password} label="Password" onChange={handleInputChange} ></Input>
                <Button label="Submit" name="submit" onClick={handleSubmit} ></Button>
            </Form>
            <table className="table">
                <tr>
                    <th>UserName</th>
                    <th>Password</th>
                </tr>
                <tbody>
                {users.map((user)=>{
                    return <tr>
                        <td>{user.name}</td>
                        <td>{user.password}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Users;