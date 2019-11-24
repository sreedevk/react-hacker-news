import React, { Component } from 'react';

export default class CommentItem extends Component {
  render(){
    if(this.props.comment.comments.length < 1) {
      return (
        <div className="row comment-row parent-comment-row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ this.props.comment.user }</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ this.props.comment.time_ago }</h6>
                <p className="card-text" dangerouslySetInnerHTML={{__html: this.props.comment.content}}></p>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div className="row comment-row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ this.props.comment.user }</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ this.props.comment.time_ago }</h6>
                <p className="card-text" dangerouslySetInnerHTML={{__html: this.props.comment.content}}></p>
              </div>
              <div className="card-footer">
                { this.props.comment.comments.map((comment) => <CommentItem key={comment.id} comment={comment} /> ) }
              </div>
            </div>
          </div>
        </div>
      ) 
    }
  }
}
