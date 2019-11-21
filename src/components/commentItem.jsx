import React, { Component } from 'react';

export default class CommentItem extends Component {
  render(){
    return (
      <div className="row mb-2">
        <div className="col-12">
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h5 className="card-title">{ this.props.user }</h5>
              <h6 className="card-subtitle mb-2 text-muted">{ this.props.posted_at }</h6>
              <p className="card-text" dangerouslySetInnerHTML={{__html: this.props.comment}}></p>
              <a href={this.props.linkurl} className="card-link">{this.props.linktext}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
