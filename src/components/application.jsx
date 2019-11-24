import React, { Component } from 'react';
import Header from './shared/header';
import Frame from './frame';
import Footer from './shared/footer';
import { HashRouter } from "react-router-dom";

export default class Application extends Component {
  state = {}
  render(){
    return (
      <HashRouter>
        <Header />
        <Frame />
        <Footer />
      </HashRouter>
    )
  }
}
