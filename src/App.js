import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';

import { BrowserRouter, Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <span> <Link to="/">Home</Link></span>
      <span> <Link to="/about">About</Link></span>
      <span> <Link to="/users/:id">Users</Link></span>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users/:id" render={(props) => <Users { ...props } />} />
      </BrowserRouter>
    );
  }
}

export default App;