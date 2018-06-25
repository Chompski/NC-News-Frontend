import React, { Component } from "react"
import {fetchTopics} from "./API"
import { Link } from "react-router-dom";

class Topics extends Component {
    state = {
        topics: null,
        loading: true
    };
    componentDidMount() {
        fetchTopics().then(topics => {
            this.setState({ topics, loading: false })
        })

    }

        render() {

            return (
                !this.state.loading ?
                    this.state.topics.map(topic => {
                        return (
                            <div key={topic._id}> 
                                <div>
                                <Link to={`/topics/${topic._id}/articles`}>{topic.title}</Link>
                                </div>
                            </div>
                        )
                    })
                    :
                    <div>
                        <p> loading </p>
                    </div>
            )
        }
    }

export default Topics;