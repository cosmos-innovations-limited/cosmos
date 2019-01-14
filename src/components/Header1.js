import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import './header.scss'
import '../assets/animate.css';
import {Home} from "../containers/pages/home"
import About from "../containers/pages/about"
import Blog from "../containers/pages/blog"
import NewPost from "./NewPost/NewPost.js"

// class header extends React.Component {

const header = () => {

  // state = {
  //   showAboutMenu: false
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showAboutMenu: false
  //   };
  // }
  //
  // handleHover = (event) => {
  //   console.log('mouse hover')
  //   this.setState({ showAboutMenu: true });
  // };
  //
  // handleLeave = (event) => {
  //   console.log('mouse left')
  //   this.setState({ showAboutMenu: false });
  // };

  // render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg">
            <Link to="/about" className="navbar-brand">COSMOS <br />INNOVATIONS</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto nav-pills">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to="/blog" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</Link>
                  <div class="dropdown-menu animated flipInX delay-8s">
                    <Link class="dropdown-item" to="/blog">N<sup>th</sup> Dimension</Link>
                    <Link class="dropdown-item" to="/blog/newpost">New Post</Link>
                    <Link class="dropdown-item" to="/blog/videos">Videos</Link>
                  </div>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
          <div  className="header-image-overlay">
            <img src={require('../assets/images/shani.png')} className= "header-image" alt="Cosmos Innovations header"></img>
            <span className="cosmos-floating">C</span>
            <span className="cosmos-floating1">O</span>
            <span className="cosmos-floating2">S</span>
            <span className="cosmos-floating3">m</span>
            <span className="cosmos-floating4">O</span>
            <span className="cosmos-floating5">S</span>
            <img src={require('../assets/images/shani.png')} className= "header-image2" alt="Cosmos Innovations header"></img>
            <img src={require('../assets/images/shani.png')} className= "header-image1" alt="Cosmos Innovations header"></img>
          </div>
          <hr />

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/newpost" component={NewPost} />
        </div>
      </Router>
    );
  // }
}

export default header;
