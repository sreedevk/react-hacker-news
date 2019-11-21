import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NewsItem extends Component {
  render(){
    return (
      <div className="row mb-2">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{ this.props.title }</h5>
              <h6 className="card-subtitle mb-2 text-muted">{ this.props.subtitle }</h6>
              <p className="card-text">{this.props.body}</p>
              <a href={this.props.linkurl} className="card-link">{this.props.linktext}</a>
              <div className="card-footer">
                <div className="news-footer-container">
                  <div>
                    <img className="card-img-top comment-icon" src={require("../images/comments.png")} alt="Comments" />
                    <span className="comments-count">{this.props.comments_count}</span>
                  </div>
                  <div>
                    <img className="card-img-top comment-icon" src={require("../images/stars.png")} alt="Points" />
                    <span className="comments-count">{this.props.points}</span>
                  </div>
                  <div className="float-right">
                    <NavLink to={"/viewNews/" + this.props.newsid}>&#128065;</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

