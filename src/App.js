import React, { Component } from 'react';
// import logo from './logo.svg';
import './assets/animate.css';
import './App.css';
import Header from './components/Header.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // isDisabled: true,
      subscriberData: {
        id: Date.now(),
        firstName: '',
        lastName: '',
        email: ''
      }

    };
  }



  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
