import React, { Component } from "react"
import { fetchArticles } from "./API"
import { Link } from "react-router-dom";
import Loading from './NCLoading.png'

import NewArticle from "./PostArticle";

class ArticlesPage extends Component {
    state = {
        articles: [],
        loading: true,
        buttonClicked: false
    }

    toggleButton = (event) => {
        event.preventDefault();
        this.setState({
            buttonClicked: !this.state.buttonClicked
        })
    }

    addArticle = (article) => {
        this.setState(prevState => ({ articles: [article, ...prevState.articles] }))
    }

    sortArticles = (articles) => {
        return articles.sort(function (x, y) {
            return y.votes - x.votes;
        })
    }

    componentDidMount() {
        if (this.props.match.params.topicID) {
            fetchArticles(this.props.match.url).then(articles => {
                this.setState({ articles:this.sortArticles(articles), loading: false })
            })
        }

        else {
            fetchArticles("/articles").then(articles => {
                this.setState({ articles:this.sortArticles(articles), loading: false })
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.url !== this.props.match.url) {
            fetchArticles(this.props.match.url).then(articles => {
                this.setState({ articles:this.sortArticles(articles), loading: false })
            })
        }
    }

    render() {
        const { articles, loading } = this.state
        return (
            !loading ?
                <React.Fragment >
                   {this.props.match.url !== '/' && <NewArticle buttonClicked={this.state.buttonClicked} toggleButton={this.toggleButton} addArticle={this.addArticle} {...this.props} />}
                    {articles.map(article => {
                        return (
                            <div key={article._id} className="ArticlesLayout">
                                <Link style={{ paddingLeft: 20, color: 'black', textDecoration: 'none' }} to={`/articles/${article._id}`}>
                                    <div>
                                        <img src={article.created_by.avatar_url} className="UserImage" align="left" width="6%" />
                                        <div className="inline-title" align="center">
                                            <h3>{article.title}</h3>
                                        </div>
                                        <div className="inline-body">
                                            <p><b>Votes: {article.votes}</b></p>
                                            <p><b>{article.created_by.username}</b></p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                    }

                </React.Fragment>
                :
                <div>
                    <img src={Loading} align="center" className="App-Loading" width="60%" />
                </div>
        )
    }
}

export default ArticlesPage