import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <span> <Link to="/">Home</Link></span>
      <span> <Link to="/about">About</Link></span>
      <span> <Link to="/users">Users</Link></span>
        <Home />
      </BrowserRouter>
    );
  }
}

export default App;