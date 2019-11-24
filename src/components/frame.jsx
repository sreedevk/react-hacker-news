import React, { Component } from 'react';
import { Route } from "react-router-dom";
import News from './news'
import Jobs from './jobs'
import Ask from './ask'
import ViewNews from './viewNews'

export default class Frame extends Component {
  state = {}
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className={"col-12 container-frame"}>
            <Route exact path="/" component={News} />
            <Route path="/jobs" component={Jobs} />
            <Route path="/ask" component={Ask} />
            <Route path="/viewNews/:news_id" component={ViewNews} />
          </div>
        </div>
      </div>
    )
  }
}
