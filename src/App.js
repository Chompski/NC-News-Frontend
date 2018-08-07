import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Topics from "./Topics"
import ArticlesPage from "./Articles"
import ArticlePage from "./Article"
import NotFound from "./NotFound"

class App extends Component {

  render() {
    return (
     
      <BrowserRouter>
       
        <div className="App">

          <span className="App-Nav">
            <a className="button home" href="/" role="button"></a>
            <Topics />
          </span>
        
          <div align="center" className="App-Body">
          <Switch>
            <Route exact path="/" render={(props) => <ArticlesPage {...props} />} />
            <Route exact path="/topics/:topicID/articles" render={(props) => <ArticlesPage {...props} />} />
            <Route exact path="/articles/:articleID" render={(props) => <ArticlePage {...props} />} />
            <Route path="*" render={(props) => <NotFound {...props} />} />
          </Switch>
          </div>

        </div>
       
      </BrowserRouter>
     
    );
  }
}

export default App;
