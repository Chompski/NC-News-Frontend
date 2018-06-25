import React, { Component } from "react"
import {fetchTopicArticles} from "./API"

class TopicArticlesPage extends Component {
    state = {
        articles: null,
        loading: true
    }
   
    componentDidMount() {
        fetchTopicArticles(this.props.match.params.topicID).then(articles => {
            this.setState({ articles, loading: false })
        })
    }
    render() {
        console.log(this.state.articles)
        return (
            !this.state.loading ?
                this.state.articles.map(article => {
                    return (
                        <div key={article._id}> 
                            <div>
                                <h4>{article.title}</h4>
                                <p>{article.body}</p>
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

export default TopicArticlesPage