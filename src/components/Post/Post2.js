import React from 'react';
import {withRouter} from 'react-router-dom';

import './Post.scss';

const post = (props) => {
  console.log(props);
  return (
    <article className="Post" onClick={props.clicked}>
        <div className="c12">
          <img className="blog__post--image" src={require('../../assets/images/shani.png')} alt=""/>
        </div>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
  );
};

export default withRouter(post);
