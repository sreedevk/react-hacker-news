import React, { Component } from 'react';

export default class Sidebar extends Component {
  render(){
    return (
      <div className="row sidebar-row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">About HackerNews</h5>
              <img className="card-img-top hackernews-intro-img" src={require("../images/hacker-news-logo.png")} alt="Card image cap" />
              <p className="card-text">HackerNews is the best source of tech news online. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
