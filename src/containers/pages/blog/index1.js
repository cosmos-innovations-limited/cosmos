import React, { Component } from 'react';
import "./blog.scss"
import Post from '../../../components/Post/Post';
import FullPost from '../../../components/FullPost/FullPost';
import NewPost from '../../../components/NewPost/NewPost';
import axios from 'axios';

class Blog extends Component {

  constructor (props) {
    super(props);
    console.log('lifecycle 1: Inside Constructor')
    this.state = {
      posts: [],
      selectedPostId: null,
      error: false
    }
  }

  // state = {
  //   posts: [],
  //   selectedPostId: null,
  //   error: false
  // }

  componentWillMount () {
    console.log('lifecycle 2: (unsafe) Inside ComponentWillMount')
  }

  static getDerivedStateFromProps (props, state) {
      console.log('lifecycle 2a & 5a: Inside getDerivedStateFromProps')
  }

  static getDerivedStateFromError(error) {
    console.log('lifecycle error 1: Inside getDerivedStateFromError')
  }
  componentDidCatch(error, info) {
    console.log('lifecycle error 2: Inside componentDidCatch')
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

  componentWillReceiveProps(nextProps) {
    console.log('lifecycle 5: (unsafe) Inside componentWillReceiveProps method')
    return nextProps;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('lifecycle 6: Inside shouldComponentUpdate method')
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('lifecycle 7: (unsafe) Inside componentWillUpdate method')
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('lifecycle 7a: Inside getSnapshotBeforeUpdate method')
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('lifecycle 8: Inside componentDidUpdate method')
  }

  componentWillUnMount () {
    console.log('lifecycle 9: Inside componentWillUnMount')
  }

  render () {

      console.log('lifecycle 3: Inside render method')

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
