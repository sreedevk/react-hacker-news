import React, { Component } from 'react';

export default class Loader extends Component {
  render() {
    return (
      <div class="loader-container">
        <img className="card-img-top hackernews-intro-img" src={require("../../images/loader.gif")} alt="Loading.." />
      </div>
    );
  }
}
