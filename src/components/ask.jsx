import React, { Component } from 'react';
import PageTitle from './pageTitle';

export default class Ask extends Component {
  state = {}
  render(){
    return (
      <div className="ask-content frame-content">
        <PageTitle title="Ask - Forum" />
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Does God Exist?</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
