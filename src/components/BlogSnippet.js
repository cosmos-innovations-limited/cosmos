import React from 'react';
import './blogsnippet.scss'
import '../assets/animate.css';
import "../assets/images/shani.png";

function BlogSnippet (props) {
  return (
      <div className="blogsnippet">
        <img src={require("../assets/images/shani.png")} alt="nth dimension default thumbnail" />
        <h3 className="bsTitle c6">{props.title}</h3>
        <hr />
        <p className="bstexthighlight">{props.highlight}</p>

      </div>
  )
}

export default BlogSnippet;
