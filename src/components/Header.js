import React, { Component } from "react";
import { NavLink, HashRouter } from "react-router-dom";

import './Header.css';

import googleIMG from '../images/logo-tall.svg';

class Header extends Component {
  render() {
    return(
      <div className='header'>
        <div className='header-full' >
          <img src={googleIMG} />
        </div>
        <HashRouter>
          <nav className='header-nav'>
            <ul>
              <li><NavLink exact to="/" className='header-navlink' >Home</NavLink></li>
              <li><NavLink to="/Blog" className='header-navlink' >Blog</NavLink></li>
              <li><NavLink to="/contact" className='header-navlink' >Contact</NavLink></li>
            </ul>
          </nav>
        </HashRouter>
      </div>
    );
  }
}

export default Header;