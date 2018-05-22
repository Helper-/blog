import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";

import './Main.css';

import Header from './Header';
import Mario from "./Mario";
import Blog from "./Blog";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
      <div className="grid-container">
        <Header />
        <HashRouter>
          <div className='middle' >  
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