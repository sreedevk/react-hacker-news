import React, { Component } from 'react';
import NewsItem from './newsItem';
import PageTitle from './pageTitle';
import CommentItem from './commentItem';
import Sidebar from './sidebar';

export default class ViewNews extends Component {
  state = {
    loading: true,
    newsId: this.props.match.params
  }

  async componentWillMount(){
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
                <hr />Comments &#9660; <hr />
              </div>
              <div className="comments-container">
                { this.state.news.comments.map(comment => <CommentItem key={comment.id} comment={comment.content} user={comment.user} posted_at={comment.time_ago}/>)}
              </div>
            </div>
            <div className="col-4">
              <Sidebar />          
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (<img className="card-img-top hackernews-intro-img" src={require("../images/loader.gif")} alt="Loading.." />);
    }

  }
}
