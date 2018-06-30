import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";


import Topics from "./Topics"
import ArticlesPage from "./Articles"
import ArticlePage from "./Article"
import NewArticle from "./PostArticle"


class App extends Component {
  state = {
    buttonClicked: false,
  }

  toggleButton = (event) => {
    event.preventDefault();
    this.setState({
      buttonClicked: !this.state.buttonClicked
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div align="center" className="App-Body">
            <Route exact path="/" render={(props) => <ArticlesPage {...props} />} />
            <Route exact path="/topics/:topicID/articles" render={(props) => <ArticlesPage {...props} />} />
            <Route exact path="/articles/:articleID" render={(props) => <ArticlePage {...props} />} />
          </div>
          <div className="App-Nav">
            <a className="button home" href="http://localhost:3000/" role="button"></a>
            <Topics />
            <Route exact path="/topics/:topicID/articles" render={(props) => {
              return <NewArticle buttonClicked={this.state.buttonClicked} toggleButton={this.toggleButton} {...props} />
            }} />

          </div>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
