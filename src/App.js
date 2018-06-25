import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import Topics from "./Topics"
import TopicArticlesPage from "./TopicArticles"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div className="App-Nav">
        </div>
        <Route exact path="/" component={TopicsPage} />
        <Route exact path="/topics/:topicID/articles" render = {(props) => <TopicArticlesPage {...props} />}/>
      </div>
    </BrowserRouter>
  );
}
}

const TopicsPage = props => {
  return (
    <Topics />
  )
}


export default App;
