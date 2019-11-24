import React, { Component } from 'react';

export default class JobItem extends Component {
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
            </div>
            <div className="card-footer">
              <a className="btn jobapply-btn" href={this.props.url}>Apply Now!</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
