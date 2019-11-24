import React, { Component } from 'react';
import PageTitle from './pageTitle';
import NewsItem from './newsItem'
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

export default class News extends Component {
  state = {
    loading: true,
    page: 1
  }

  async loadPage(page) {
    if(page >= 1 && page < 12){
      this.setState({loading: true})
      const response = await fetch("https://api.hnpwa.com/v0/news/"+page+".json"); 
      this.setState({ news: await response.json(), loading: false, page: page });
    }
  }

  async componentWillMount(){
    this.loadPage(this.state.page)
  }

  render(){
    const renderNextBtn = () => {
      if(this.state.page <= 12){
        return (<button className="float-right btn btn-primary" onClick={ () => { this.loadPage(this.state.page + 1) }  }>Next Page</button> );
      }
    }

    const renderPrevBtn = () => {
      if(this.state.page > 1){
        return (<button className="float-left btn btn-primary" onClick={ () => { this.loadPage(this.state.page - 1) }  }>Prev Page</button> );
      }
    }

    if(!this.state.loading) {
      return (
        <React.Fragment>
          <Helmet><title>Hacker News</title></Helmet>
          <div className="news-content frame-content">
            <PageTitle title="News Headlines" />
            <div className="row newslist-container">
              { this.state.news.map((newsentry, index) => 
                <div key={newsentry.id} className="col-4">
                  <NavLink to={"/viewNews/" + newsentry.id}>
                    <NewsItem 
                      type="list"
                      title={newsentry.title}
                      subtitle={ 'Published ' + newsentry.time_ago + ' By ' + newsentry.user}
                      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
                      linktext=""
                      linkurl=""
                      comments_count={newsentry.comments_count}
                      points={newsentry.points}
                      newsid={newsentry.id} 
                    />
                  </NavLink>
                </div>
              )}
            </div>

            <div className="row mb-5">
              <div className="col-12">
                { renderNextBtn() }
                { renderPrevBtn() }
                <div className="page-container">Page { this.state.page }</div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }else {
      return (<img className="card-img-top hackernews-intro-img" src={require("../images/loader.gif")} alt="Loading.." />);
    }
  }
}
