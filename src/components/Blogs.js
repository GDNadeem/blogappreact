import React, { Component } from "react";
import axios from "axios";

export class Blogs extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            post: ""

        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data
                })
                console.log(response.data)
            })
    }

    render() {

        const { posts } = this.state
        return (
            <div>
                <h1> List of Posts</h1>
                {posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>) : null}

            </div>
        )
    }
}
