import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import './header.scss'
import {Home} from "../containers/pages/home"
import About from "../containers/pages/about"
import Blog from "../containers/pages/blog"

function header () {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg">
          <Link to="/about" className="navbar-brand">COSMOS <br />INNOVATIONS</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">Blog</Link>
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
        </div>
        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
      </div>
    </Router>
  )
}

export default header;
