import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Cosmos Innovations  Limited
          </p>
          <a
            className="App-link"
            href="www.cosmosinnovations.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solving problems for good.
          </a>
        </header>
      </div>
    );
  }
}

export default App;
