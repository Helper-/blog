import React, { Component } from "react";
import { Route, Redirect, NavLink, HashRouter } from "react-router-dom";

import './Main.css';

import Header from './Header';
import Mario from "./Mario";
import Blog from "./Blog";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
      <div class="grid-container">
        <Header />
        <HashRouter>
          <div className='middle' >  
            <ul>
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/Blog">Blog</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" />
              <Redirect from="/" to="/blog" />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
              <Route path="/mario" component={Mario} />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}
 
export default Main;