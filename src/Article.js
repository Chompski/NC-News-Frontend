import React, { Component } from "react"
import { fetchArticle, fetchArticleComments } from "./API"
import './Article.css';
import Loading from './NCLoading.png'


class ArticlePage extends Component {
    state = {
        article: null,
        comments: [],
        loading: true
    }

    componentDidMount() {
        const ID = this.props.match.params.articleID
        fetchArticle(ID).then(article => {
            this.setState({ article })

            fetchArticleComments(ID).then(comments => {
                this.setState({ comments, loading: false })
            })

        })
    }

    render() {
        const { article, comments, loading } = this.state
        return (
            !loading ?
                (
                    <div className="ArticleLayout">
                        <img src={article.created_by.avatar_url} className="UserImage" align="left" width="8%" />
                        <div className="inline-title" align="center">
                            <h2>{article.title}</h2>
                        </div>
                        <p>{article.body}</p>

                        <div className="inline-body">
                            <p>{article.votes}</p>
                            <p>{article.created_by.username}</p>
                        </div>
                        <div>
                            {comments.map(comment => {
                                return (
                                    <div className="CommentLayout">
                                        <div class="line-separator"></div>
                                        <img src={comment.created_by.avatar_url} className="UserImage" align="left" width="7%" />
                                        <p>{comment.body}</p>
                                        <div className="inline-body">
                                            <p>{comment.votes}</p>
                                            <p>{comment.created_by.username}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                )
                :
                <div>
                    <img src={Loading} align="center" className="App-Loading" />
                </div>
        )

    }

}



export default ArticlePage