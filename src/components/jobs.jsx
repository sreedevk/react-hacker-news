import React, { Component } from 'react';
import PageTitle from './pageTitle';
import JobItem from './jobItem';
import { Helmet } from 'react-helmet';

export default class Jobs extends Component {
  state = {
    loading: true,
    page: 1
  }

  async componentDidMount(){
    const response = await fetch("https://api.hnpwa.com/v0/jobs/"+this.state.page+".json"); 
    this.setState({jobs: await response.json()});
    console.log(this.state.jobs);
    this.setState({loading: false});
  }


  render(){
    if(!this.state.loading) {
      return (
        <div className="jobs-content frame-content">
          <Helmet><title>Hacker Jobs</title></Helmet>
          <PageTitle title="Job Listings" />
          { this.state.jobs.map(job => 
            <JobItem key={job.id} title={job.title} subtitle={ 'Posted ' + job.time_ago} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" linktext="" linkurl="" url={job.url}/>
          )}
          <div className="row">
            <div className="col-12">
              <button onClick={ this.nextPage.bind(this) } className="btn btn-primary float-right">Next Page</button>
            </div>
          </div>
        </div>
      );
    }else {
      return (<img className="card-img-top hackernews-intro-img" src={require("../images/loader.gif")} alt="Loading.." />);
    }
  }

  async prevPage(){
    this.setState({loading: true});
    let prev_page = this.state.page - 1
    const response = await fetch("https://api.hnpwa.com/v0/jobs/"+prev_page+".json"); 
    this.setState({ jobs: await response.json() });
    this.setState({loading: false});
  }

  async nextPage(){
    this.setState({loading: true});
    let next_page = this.state.page + 1
    const response = await fetch("https://api.hnpwa.com/v0/jobs/"+next_page+".json"); 
    this.setState({ jobs: await response.json(), page: next_page });
    this.setState({loading: false});
  }
}
