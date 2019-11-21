import React, { Component } from 'react';
import Header from './header';
import Frame from './frame';
import { HashRouter } from "react-router-dom";

export default class Application extends Component {
  state = {}
  render(){
    return (
      <HashRouter>
        <Header />
        <Frame />
      </HashRouter>
    )
  }
}
