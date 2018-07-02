import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";


import Topics from "./Topics"
import ArticlesPage from "./Articles"
import ArticlePage from "./Article"

class App extends Component {


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
          </div>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
