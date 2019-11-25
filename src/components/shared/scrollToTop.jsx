import React, { Component } from 'react';

export default class ScrollToTop extends Component {
  state = {
    show: false
  }

  componentDidMount(){
    window.addEventListener('scroll', (event) => {
      const scrollTop = window.scrollY;
      const totalScroll = document.body.scrollHeight
      if(scrollTop >= (totalScroll/2)){
        this.setState({show: true});
      } else {
        this.setState({show: false});
      }
    });
  }

  render(){
    if(this.state.show){
      return (<button onClick={() => { window.scrollTo(0, 0) }} className="scroll-to-top-btn btn btn-primary">&#9650;</button>);
    } else {
      return null;
    }
  }
}
