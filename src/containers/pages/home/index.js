import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../../assets/animate.css';
import '../../../App.css';
import http from '../../../util/http.js'

export class Home extends Component {

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
    if (this.state.subscriberData.email && this.state.subscriberData.firstName) {
      http.post(this.state.subscriberData);
      this.setState({
        subscriberData: {
          id: this.state.subscriberData.id,
          firstName: '',
          lastName: '',
          email: ''
        }
      })
    } else {
      alert('At least Email and First name is required to subscribe!')
    }

  }

  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h1 className="display-1">Cosmos</h1>
          <h3 className="display-5">Project Future: Under Construction</h3>
          <div className="input-group mb-3 input-subscribe">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">@</span>
            </div>
            <input onChange={(event) => this.emailInputHandler(event)} type="text" className="form-control" placeholder="E-mail" aria-label="Email" aria-describedby="email" value={this.state.subscriberData.email}/>
            <input onChange={(event) => this.firstNameInputHandler(event)} type="text" className="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="First Name" value={this.state.subscriberData.firstName}/>
            <input onChange={(event) => this.lastNameInputHandler(event)} type="text" className="form-control form-control--lastName" placeholder="Last Name" aria-label="Last Name" aria-describedby="Last Name" value={this.state.subscriberData.lastName}/>
          </div>
          <button className="btn btn-primary" onClick={() => this.submitEmailHandler()}>Stay updated</button>
          <p className="display-5">Solving problems for good!</p>
        </div>
      </div>
    );
  }
}
