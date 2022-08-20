import React, { Component } from 'react'
import axios from "axios";
import "./Create.css"

export class Create extends Component {
    constructor(props) {
        super(props)

        this.state = {
            content: ''
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
        const { content } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Content</label>
                    <div>
                        <input type='text' className="Content" name='content' value={this.state.content} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <button>Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Create