import React, { Component } from "react";

import './Blog.css';

import bin from '../images/binary.png';
 
class Blog extends Component {
  render() {
    return (
      <div className='blog'> 
        <h2>TIL Blog</h2>
        <div className='blog-img'>
          <img src={bin} />
        </div>
        <p>
          I am writing this blog to have a place to write and illustrate my
          progress of learning new things through coding.  My goal is to post
          once a day, except weekend, about what I am learning that day.  Mostly
          for me to be encouraged to keep learning but if you read this maybe
          you can learn something also.  

          <br />
          <br />

          So I can kind of start this by talking about what I am learning right
          now.  This blog is in a new language for me.  I am building it in
          ReactJS.  Right now the posts are hard coded but I am working on using
          Django backend on AWS.  React is an interesting language.  I have not
          used a language that is so component based.  Makes it a lot easier to
          have clear thoughts and make sure each component does one thing.  
        </p>
      </div>
    );
  }
}
 
export default Blog;