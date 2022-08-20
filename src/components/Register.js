import React, { Component } from 'react'
import { useState} from 'react'
import axios from "axios";
import { variables } from '../Variables';

export class Register extends Component {

    

    constructor(props) {
        super(props)

        this.state = {
            name :            '',
            email:           '',
            loginid:         '',
            password:        '',
            confirmpassword: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        axios({
            method: 'post',
            url: variables.API_URL,
            data: {
                name           : this.state.name,
                email          : this.state.email,
                loginid        : this.state.loginid,
                password       : this.state.password,
                confirmpassword: this.state.confirmpassword

            }
        }).then(response => {
            console.log(response)
        })
    }

    render() {
        const { name, email, loginid, password, confirmpassword } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                        <label>Name</label>
                        <input type='text' name='name' value={this.state.name} onChange={this.handleChange}></input>
                        <br />
                        <label>Email</label>
                        <input type='email' name='email' value={this.state.email} onChange={this.handleChange}></input>
                        <br />
                        <label>LoginID</label>
                        <input type='text' name='loginid' value={this.state.loginid} onChange={this.handleChange}></input>
                        <br />
                        <label>Password</label>
                        <input type='password' name='password' value={this.state.password} onChange={this.handleChange}></input>
                        <br />
                        <label>Confirm Password</label>
                        <input type='password' name='confirmpassword' value={this.state.confirmpassword} onChange={this.handleChange}></input>
                    <br />
                    <button onClick="./">Submit</button>
                </form>
                
            </div>
        )
    }
}

export default Register