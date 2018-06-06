import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import './Main.css';

import Header from './Header';
import Home from './Home';
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
              <Route exact path="/" component={Home} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}
 
export default Main;