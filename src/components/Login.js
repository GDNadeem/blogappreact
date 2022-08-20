import React, { Component } from 'react';
import axios from "axios";
import { variables } from '../Variables';
import { Link } from 'react-router-dom';

export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            UserName: '',
            Password: ''
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
            //url: variables.API_URL,
            url: variables.API_URL,
            data: {
                UserName: this.state.UserName,
                Password: this.state.Password,
            }
        }).then(response => {
            console.log(response)
        })
    }

    render() {
        const { UserName, Password} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="App">
                        <h1>BLOG APP</h1>
                        <label>UserName</label>
                        <input type='text' name='UserName' value={this.state.UserName} onChange={this.handleChange}></input>
                        <br />
                        <label>Password</label>
                        <input type='password' name='Password' value={this.state.Password} onChange={this.handleChange}></input>
                        <br />
                    </div>
                    <div className="App">
                        <button type='Login'>Login</button>
                    </div>
                    <div>
                        <button><Link to='/regis'>Register</Link></button>
                    </div>
                </form>
            </div>
        )
    }
}