import React, { Component } from 'react';
import NewsItem from './newsItem';
import PageTitle from '../shared/pageTitle';
import CommentItem from './commentItem';
import Sidebar from '../shared/sidebar';
import Loader from '../shared/loader';

export default class ViewNews extends Component {
  state = {
    loading: true,
    newsId: this.props.match.params
  }

  async componentDidMount(){
    const response = await fetch("https://api.hnpwa.com/v0/item/"+this.state.newsId.news_id+".json"); 
    this.setState({news: await response.json()});
    this.setState({loading: false});
  }


  render() {
    if(!this.state.loading) {
      return (
        <React.Fragment>
          <PageTitle title="News Headlines" />
          <div className="row">
            <div className="col-8">
              <NewsItem key={this.state.news.id} title={this.state.news.title} subtitle={ 'Published ' + this.state.news.time_ago + ' By ' + this.state.news.user} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" linktext="Visit Page" linkurl={this.state.news.url} comments_count={this.state.news.comments_count} points={this.state.news.points} newsid={this.state.news.id}/> 
              <div className="comment-spacer">
                <hr />
                <div className="comment-tag">Comments &#9660;</div>
                <hr />
              </div>
              <div className="comments-container">
                { 
                  this.state.news.comments.map(comment => 
                    <CommentItem 
                      key={comment.id}
                      comment={comment}
                    />
                  )
                }
              </div>
            </div>
            <div className="col-4">
              <Sidebar />          
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return(<Loader />)
    }

  }
}
