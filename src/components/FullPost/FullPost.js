import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

import './FullPost.css';

class FullPost extends Component {

  state = {
    loadedPost: null
  };

  componentDidMount () {
    // console.log(this.props);
    this.loadPost();
  }

  componentDidUpdate () {
    this.loadPost();    
  }

  loadPost () {
    if (this.props.match.params.id) {
      if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)) {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
        .then(res => {
          // console.log(res);
          this.setState({loadedPost: res.data});
        });
      }
    }
  }

  // componentWillUnMount () {
  //   console.log('lifecycle 9: Inside componentWillUnMount')
  // }

  deletePostHandler = () => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
    .then(res => {
      console.log(res);
      // this.setState({loadedPost: res.data});
    });
  }

    render () {
        let post = <p className="FullPost" style={{textAlign: 'center'}}>Please select a Post!</p>;

        if (this.props.match.params.id) {
          post = <p className="FullPost" style={{textAlign: 'center'}}>Loading...</p>;
        }

        if (this.state.loadedPost) {
          post = (
              <div className="FullPost">
                  <h1>{this.state.loadedPost.title}</h1>
                  <p>{this.state.loadedPost.body}</p>
                  <div className="Edit">
                      <button className="Delete" onClick={() => this.deletePostHandler(this.state.loadedPost.id)}>Delete</button>
                  </div>
              </div>

          );
        }
        return post;
    }
}

export default withRouter(FullPost);
