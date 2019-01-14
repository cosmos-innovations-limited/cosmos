import React, { Component } from 'react';
import "../blog.scss"
import Post from '../../../../components/Post/Post';
// import FullPost from '../../../../components/FullPost/FullPost';
// import NewPost from '../../../../components/NewPost/NewPost';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';

class Posts extends Component {
  constructor (props) {
    super(props);
    console.log('lifecycle 1: Inside Constructor')
    this.state = {
      posts: [],
      selectedPostId: null,
      error: false
    }
  }

  componentDidMount () {
    console.log('lifecycle 4: Inside ComponentDidMount')
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      // console.log(res);
      const posts = res.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: 'Vikas'
        }
      });
      this.setState({ posts: updatedPosts});
    })
    .catch(error => {
      console.log(error);
      this.setState({error: true});
    });
  }

  postSelectedHandler = (id) => {
    this.setState({selectedPostId: id});
  }

  render() {
    let posts = <p className="posts-fallback" style={{textAlign: 'center'}}>Something went wrong</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Link className="post-summary" to={"/blog/" + post.id} key={post.id}>
          <Post
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)}/>
          </Link>
        );
      });
    }
    return(
      <section className="Posts c12">
          {posts}
      </section>
    );
  }
}

export default withRouter(Posts);
