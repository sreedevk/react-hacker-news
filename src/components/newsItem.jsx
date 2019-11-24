import React, { Component } from 'react';

export default class NewsItem extends Component {
  render(){
    const render_readmore = () => {
      if(this.props.type !== 'list'){
        return (<a href={this.props.linkurl} className="card-link">{this.props.linktext}</a>);
      }
    }
    return (
      <div className="card newsitem-card">
        <div className="card-body">
          <h5 className="card-title">{ this.props.title }</h5>
          <span className="card-subtitle mb-2 text-muted">{ this.props.subtitle }</span>
          <p className="card-text">{this.props.body}</p>
          { render_readmore() }
        </div>
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
          </div>
        </div>
      </div>
    )
  }
}

