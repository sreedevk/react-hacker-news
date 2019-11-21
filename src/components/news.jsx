import React, { Component } from 'react';
import PageTitle from './pageTitle';
import NewsItem from './newsItem'
import { Helmet } from 'react-helmet';

export default class News extends Component {
  state = {
    loading: true,
    page: 1
  }
  async componentDidMount(){
    const response = await fetch("https://api.hnpwa.com/v0/news/"+this.state.page+".json"); 
    this.setState({news: await response.json()});
    this.setState({loading: false});
  }
  render(){
    if(!this.state.loading) {
      const renderPrevButton = () => {
        if(this.state.page > 1) { 
          return(<button onClick={ this.prevPage.bind(this) } className="btn btn-primary float-left">Prev Page</button>)
        }else {
          return <span></span>
        }
      }
      return (
        <React.Fragment>
          <Helmet><title>Hacker News</title></Helmet>
          <div className="news-content frame-content">
            <PageTitle title="News Headlines" />
            <div className="row">
              <div className="col-12">
                { this.state.news.map(newsentry => 
                  <NewsItem key={newsentry.id} title={newsentry.title} subtitle={ 'Published ' + newsentry.time_ago + ' By ' + newsentry.user} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" linktext="" linkurl="" comments_count={newsentry.comments_count} points={newsentry.points} newsid={newsentry.id}/> 
                )}
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-12">
                { renderPrevButton() }
                <button onClick={ this.nextPage.bind(this) } className="btn btn-primary float-right">Next Page</button>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }else {
      return (<img className="card-img-top hackernews-intro-img" src={require("../images/loader.gif")} alt="Loading.." />);
    }
  }

  async prevPage(){
    this.setState({loading: true});
    let prev_page = this.state.page - 1
    const response = await fetch("https://api.hnpwa.com/v0/news/"+prev_page+".json"); 
    this.setState({ news: await response.json() });
    this.setState({loading: false});
  }

  async nextPage(){
    this.setState({loading: true});
    let next_page = this.state.page + 1
    const response = await fetch("https://api.hnpwa.com/v0/news/"+next_page+".json"); 
    console.log(next_page);
    this.setState({ news: await response.json(), page: next_page });
    this.setState({loading: false});
  }
}
