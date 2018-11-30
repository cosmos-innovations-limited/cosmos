import React, { Component } from 'react';
// import logo from './logo.svg';
import './assets/animate.css';
import './App.css';
import Header from './components/Header.js';
import http from './util/http.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subscriberData: {
        id: Date.now(),
        firstName: '',
        lastName: '',
        email: ''
      }

    };
  }

  emailInputHandler (event) {
    this.setState({
      subscriberData: {
        id: this.state.subscriberData.id,
        firstName: this.state.subscriberData.firstName,
        lastName: this.state.subscriberData.lastName,
        email: event.target.value
      }
    })
  }
  firstNameInputHandler (event) {
    this.setState({
      subscriberData: {
        id: this.state.subscriberData.id,
        firstName: event.target.value,
        lastName: this.state.subscriberData.lastName,
        email: this.state.subscriberData.email
      }
    })
  }
  lastNameInputHandler (event) {
    this.setState({
      subscriberData: {
        id: this.state.subscriberData.id,
        firstName: this.state.subscriberData.firstName,
        lastName: event.target.value,
        email: this.state.subscriberData.email
      }
    })
  }

  submitEmailHandler () {
    http.post(this.state.subscriberData);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div classMame="App-body">
          <h1 className="display-1">Cosmos</h1>
          <h3 className="display-5">Project Future: Under Construction</h3>
          <div className="input-group mb-3 input-subscribe">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">@</span>
            </div>
            <input onChange={(event) => this.emailInputHandler(event)} type="text" className="form-control" placeholder="Enter your e-mail ..." aria-label="Email" aria-describedby="email" value={this.state.subscriberData.email}/>
            <input onChange={(event) => this.firstNameInputHandler(event)} type="text" className="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="First Name" value={this.state.subscriberData.firstName}/>
            <input onChange={(event) => this.lastNameInputHandler(event)} type="text" className="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="Last Name" value={this.state.subscriberData.lastName}/>
          </div>
          <button className="btn btn-primary" onClick={() => this.submitEmailHandler()}>Stay updated</button>
          <p className="display-5">Yes, It is possible!</p>
        </div>
      </div>
    );
  }
}

export default App;
