import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  state = {}
  render(){
    return(
      <div className="container-fluid">
        <header className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
              <NavLink className="navbar-brand" to="/">Hacker News</NavLink>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Ask">Ask</NavLink>
                  </li>
                </ul>
                <span className="navbar-text">
                  The Hackers Compendium
                </span>
              </div>
            </nav>
          </div>
        </header>
        
      </div>
      
    )
  }
}
