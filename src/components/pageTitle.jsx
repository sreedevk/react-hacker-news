import React, { Component } from 'react';

export default class PageTitle extends Component {
  state = {title: this.props.title}
  render(){
    return (
      <div className="row">
        <div className="col-12">
          <h6 className="page-descriptor bg-primary text-white">{this.state.title}</h6>
        </div>
      </div>
    )
  }
}
