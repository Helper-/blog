import React, { Component } from "react";
import { Route, Redirect, NavLink, HashRouter } from "react-router-dom";

import Mario from "./Mario";
import Blog from "./Blog";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>  
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Mario}/>
            <Redirect from="/" to="/blog"/>
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;