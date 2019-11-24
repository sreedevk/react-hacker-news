import React, { Component } from 'react';

export default class PageTitle extends Component {
  state = {title: this.props.title}
  render(){
    return (
      <div className="row">
        <div className="col-12">
          <h4 className="page-descriptor">{this.state.title}</h4>
        </div>
      </div>
    )
  }
}
