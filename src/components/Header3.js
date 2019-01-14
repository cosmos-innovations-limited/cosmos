import React from 'react';
import {Route, Link, NavLink} from "react-router-dom"
import './header.scss'
import '../assets/animate.css';
import {Home} from "../containers/pages/home"
import About from "../containers/pages/about"
import Blog from "../containers/pages/blog"
import NewPost from "./NewPost/NewPost.js"

const header = (props) => {

    return (
        <div>
          <nav className="navbar navbar-expand-lg">
            <Link to="/about" className="navbar-brand">COSMOS <br />INNOVATIONS</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto nav-pills">
                <li className="nav-item active">
                  <NavLink to="/" exact activeClassName="nav-item-active" className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink to="/blog" activeClassName="nav-item-active"  exact className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</NavLink>
                  <div className="dropdown-menu animated flipInX delay-8s">
                    <a className="dropdown-item" href="/blog">N<sup>th</sup> Dimension</a>
                    <Link className="dropdown-item" to={{
                      pathname: '/blog/newpost',
                      hash: '#submit',
                      search: '?quick-submit=true'
                    }}>New Post</Link>
                    <Link className="dropdown-item" to="/blog/videos">Videos</Link>
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
    );
}

export default header;
