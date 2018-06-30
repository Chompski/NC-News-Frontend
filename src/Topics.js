import React, { Component } from "react"
import { fetchTopics } from "./API"
import { Link } from "react-router-dom";


class Topics extends Component {
    state = {
        topics: [],
        loading: true
    };

    componentDidMount() {
        fetchTopics().then(topics => {
            this.setState({ topics, loading: false })
        })
    }

    render() {
        const { topics, loading } = this.state
        return (
            !loading ?
                topics.map(topic => {
                    return (
                        <Link key={topic._id} className="button" to={`/topics/${topic._id}/articles`}>{topic.title}</Link>
                    )
                })
                :
                <div>
                </div>
        )
    }
}

export default Topics;