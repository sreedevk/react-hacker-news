import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Subscription from './subscription';

export default class Sidebar extends Component {
  render(){
    const dynamicElem = () => {
      if(window.location.hash !== '#/jobs') {
        return (
          <div className="row sidebar-row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Jobs
                    <img className="card-img-top float-right" src={require("../../images/jobs.png")} alt="Jobs"/>
                  </h5>
                  <p className="card-text">
                    View the Hottest Jobs in Town and apply thru hackernews to find your career path today!
                  </p>
                </div>
                <div className="card-footer">
                  <NavLink className="btn btn-success form-control" to="/jobs">View Jobs</NavLink>
                </div>
              </div>
            </div>
          </div> 
        )
      } else {
        return (
          <div className="row sidebar-row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    News
                    <img className="card-img-top float-right" src={require("../../images/news-icon.png")} alt="News"/>
                  </h5>
                  <p className="card-text">
                    Stay up to date with the latest news thru hackernews!
                  </p>
                </div>
                <div className="card-footer">
                  <NavLink className="btn btn-success form-control" to="/">Read Now</NavLink>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }

    return (
      <React.Fragment>
        <div className="row sidebar-row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">About HackerNews</h5>
                <img className="card-img-top hackernews-intro-img float-left m-3" src={require("../../images/hacker-news-logo.png")} alt="HackerNews"/>
                <p className="card-text">HackerNews is the best source of tech news online. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
              </div>
            </div>
          </div>
        </div>
        { dynamicElem() }
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">NewsLetter</h5>
                <Subscription />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
