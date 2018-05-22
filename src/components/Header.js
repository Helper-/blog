import React, { Component } from "react";

import './Header.css';

// import googleIMG from '../images/logo-tall.svg';

class Header extends Component {
  render() {
    return(
      <div className='header'>
        <div className='header-full' />
        <h2> This is the header! </h2>
      </div>
    );
  }
}

export default Header;