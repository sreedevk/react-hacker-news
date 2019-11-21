import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    var date = new Date;
    
    return (
      <footer className="bg-dark text-white">
        <h6>&copy; { date.getFullYear() } Sreedev Kodichath | All Rights Reserved </h6>
      </footer>
    )
  }
}
