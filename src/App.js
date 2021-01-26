import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <span> <Link to="/">Home</Link></span>
      <span> <Link to="/about">About</Link></span>
      <span> <Link to="/users/:id">Users</Link></span>
      <Switch>
        <Route path="/users/:id" render={(props) => <Users { ...props } />} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;