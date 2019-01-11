import React, { Component } from 'react';
import "./blog.scss"
import Post from '../../../components/Post/Post';
import FullPost from '../../../components/FullPost/FullPost';
import NewPost from '../../../components/NewPost/NewPost';
import axios from 'axios';

class Blog extends Component {

  state = {
    posts: [],
    selectedPostId: null,
    error: false
  }

  componentDidMount () {
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

  render () {

    let posts = <p className="posts-fallback" style={{textAlign: 'center'}}>Something went wrong</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Post
            className="postSummary"
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}/>;
      });
    }

    return (
      <div className="blog">
        <h2 className="c12 display-3">N<sup>th</sup> Dimension</h2>
        <small className="c12 display-5">proudly presented by Cosmos Innovations</small>
        <div className="c12">
          <img className="blog__post--image" src={require('../../../assets/images/shani.png')} alt=""/>
        </div>
        <section className="c12">
          <section className="Posts">
              {posts}
          </section>
          <section>
              <FullPost id={this.state.selectedPostId}/>
          </section>
          <section>
              <NewPost />
          </section>
        </section>

      </div>
    );
  }
}

export default Blog;
