import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    var date = new Date;
    
    return (
      <footer>
        <hr />
        <h6>&copy; { date.getFullYear() } Sreedev Kodichath | All Rights Reserved </h6>
      </footer>
    )
  }
}
