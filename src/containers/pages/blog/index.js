import React, {
  Component
} from 'react';
import "./blog.scss"
import Posts from "./Posts/Posts";
// import Post from '../../../components/Post/Post';
// import FullPost from '../../../components/FullPost/FullPost';
// import NewPost from '../../../components/NewPost/NewPost';
// import axios from 'axios';

class Blog extends Component {

  componentWillMount() {
    console.log('lifecycle 2: (unsafe) Inside ComponentWillMount')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('lifecycle 2a & 5a: Inside getDerivedStateFromProps')
  }

  static getDerivedStateFromError(error) {
    console.log('lifecycle error 1: Inside getDerivedStateFromError')
  }
  componentDidCatch(error, info) {
    console.log('lifecycle error 2: Inside componentDidCatch')
  }

  componentDidMount() {
    console.log('lifecycle 4: Inside ComponentDidMount')
    console.log(this.props)
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

  componentWillUnmount() {
    console.log('lifecycle 9: Inside componentWillUnMount')
  }

  render() {

    console.log('lifecycle 3: Inside render method');

    return ( <
      div className = "blog" >
      <
      h2 className = "c12 display-3" > N < sup > th < /sup> Dimension</h2 >
      <
      small className = "c12 display-5" > proudly presented by Cosmos Innovations < /small> <
      Posts / >
      <
      /div>
    );
  }
}

export default Blog;