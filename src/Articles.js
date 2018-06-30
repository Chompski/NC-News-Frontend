import React, { Component } from "react"
import { fetchArticles } from "./API"
import { Link } from "react-router-dom";
import Loading from './NCLoading.png'

class ArticlesPage extends Component {
    state = {
        articles: [],
        loading: true,
        buttonClicked: false
    }

    componentDidMount() {
        if (!this.props.match.url === "/") {
            fetchArticles(this.props.match.url).then(articles => {
                this.setState({ articles, loading: false })
            })
        }

        else {
            fetchArticles("/articles").then(articles => {
                this.setState({ articles, loading: false })
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.url !== this.props.match.url) {
            fetchArticles(this.props.match.url).then(articles => {
                this.setState({ articles, loading: false })
            })
        }
    }

    render() {
        const { articles, loading } = this.state
        return (
            !loading ?
                articles.map(article => {
                    return (
                        <div key={article._id} className="ArticlesLayout">
                        <Link style={{ paddingLeft: 20, color: 'black', textDecoration: 'none' }} to={`/articles/${article._id}`}>
                       <div>
                            <img src={article.created_by.avatar_url} className="UserImage" align="left" width="6%" />
                         <div className="inline-title" align="center">
                            <h3>{article.title}</h3>
                         </div>
                         <div className="inline-body">
                            <p>{article.votes}</p>
                            <p>{article.created_by.username}</p>
                         </div>
                        </div>
                            </Link>
                        </div>
                    )
                })
                :
                <div>
                   <img src={Loading} align="center" className="App-Loading" />
                </div>
        )
    }
}

export default ArticlesPage