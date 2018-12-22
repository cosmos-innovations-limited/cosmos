import React from "react";
import "./blog.scss"

function Blog() {
  return (
    <div className="blog">
      <h2 className="c12">Nth Dimension</h2>
      <small className="c12">proudly presented by Cosmos Innovations</small>
      <div className="c12">
        <img className="blog__post--image" src={require('../../../assets/images/shani.png')} alt=""/>
      </div>
      <div className="c12">
        <h3>Blog Title</h3>
        <p>
        lorem ipsum
        </p>
      </div>
      <hr />
    </div>
  );
}

export default Blog;
