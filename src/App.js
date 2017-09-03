import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, IndexRoute } from 'react-router';
import Search from './Search';
import Show from './Show';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={Search} />
        <Route path="/show/:id" component={Show} />
      </Router>
    );
  }
}

export default App;
