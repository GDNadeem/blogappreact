import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from "axios";

export class CreateBlog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            address: ''
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

        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)

            })
    }

    render() {
        const { title, address } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input type='text' name='title' value={this.state.title} onChange={this.handleChange}></input>
                     </div>
                    <div>
                        <label>Address</label>
                        <input type='text' name='address' value={this.state.address} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <button><Link to='/create'>Create</Link></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateBlog