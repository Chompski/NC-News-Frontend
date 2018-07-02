import React, { Component } from "react"
import { fetchArticle, fetchArticleComments } from "./API"
import './Article.css';
import Loading from './NCLoading.png'
import NewComment from "./PostComment"
import Rating from "./Rating"

import moment from "moment"



class ArticlePage extends Component {
    state = {
        article: {},
        comments: [],
        loading: true,
        buttonClicked: false
    }


    toggleButton = (event) => {
        event.preventDefault();
        this.setState({
          buttonClicked: !this.state.buttonClicked
        })
      }

      addComment = (comment) => {
          this.setState(prevState => ({comments: this.sortComment([comment,...prevState.comments])}))
      }

      changeVote = (direction) => {
          const vote = direction === 'up' ? 1 : direction === 'down' ? -1 : 0
        this.setState(prevState => ({article: {...prevState.article, votes: prevState.article.votes + vote}}))
      }

      changeCommentVote = (direction) => {
        const vote = direction === 'up' ? 1 : direction === 'down' ? -1 : 0
      this.setState(prevState => ({comment: {...prevState.comment, votes: prevState.comment.votes + vote}}))
    }

      sortComment = (comments) => {
      return comments.sort(function(x, y){
            return y.created_at - x.created_at;
        })
      }

    componentDidMount() {
        const ID = this.props.match.params.articleID
        fetchArticle(ID).then(article => {
            this.setState({ article })

            fetchArticleComments(ID).then(comments => {
                this.setState({ comments:this.sortComment(comments), loading: false })
            })

        })
    }

    componentDidUpdate(prevProps) {
        const ID = this.props.match.params.articleID
        if (prevProps.match.url !== this.props.match.url) {
            fetchArticleComments(ID).then(comments => {
                this.setState({ comments:this.sortComment(comments), loading: false })
            })
        }
    }

    render() {
        const { article, comments, loading } = this.state
        return (
            !loading ?
            <React.Fragment >
                 <NewComment buttonClicked={this.state.buttonClicked} toggleButton={this.toggleButton} addComment={this.addComment} {...this.props} />
                    <div className="ArticleLayout" align="center">      
                        <img src={article.created_by.avatar_url} className="UserImage" align="left" width="8%" />    
                        <div className="inline-title" align="center">
                            <h2>{article.title}</h2>
                        </div>
                        <div>
                        <p>{article.body}</p>
                        </div>
                        <div className="inline-body" align="center">
                            <Rating id={article._id} votes={article.votes} changeVote={this.changeCommentVote}/>
                            <p><b>{article.created_by.username}</b></p>
                        </div>
                        <div>
                            {comments.map(comment => {
                                console.log(comment._id)
                                return (
                                    <div className="CommentLayout">
                                        <div className="line-separator"></div>
                                        <img src={comment.created_by.avatar_url} className="UserImage" align="left" width="7%" />
                                        <p>{comment.votes}</p>
                                        <div className="inline-body">
                                        <Rating id={comment._id} votes={comment.votes} changeVote={this.changeVote}/>
                                            <p>{comment.created_by.username}</p>
                                            <p>Posted: {moment(comment.created_at).fromNow()}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </React.Fragment>
                :
                <div>
                    <img src={Loading} align="center" className="App-Loading" />
                </div>
        )

    }

}



export default ArticlePage