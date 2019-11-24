import React, { Component } from 'react';

export default class Subscription extends Component {
  render(){
    return(
      <form className="form subscription-form">
        <div className="form-group">
          <input id="subscriptionEmail" className="form-control" type="email" placeholder="john@doe.com"/>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary form-control">Subscribe Now!</button>
        </div>
      </form>
    )
  }
}
