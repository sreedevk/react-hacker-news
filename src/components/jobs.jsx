import React, { Component } from 'react';
import PageTitle from './pageTitle';
import JobItem from './jobItem';
import Sidebar from './sidebar';
import { Helmet } from 'react-helmet';

export default class Jobs extends Component {
  state = {
    loading: true
  }

  async componentWillMount(){
    const response = await fetch("https://api.hnpwa.com/v0/jobs/1.json"); 
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
          <div className="row">
            <div className="col-8">
              { this.state.jobs.map(job => 
                <JobItem key={job.id} title={job.title} subtitle={ 'Posted ' + job.time_ago} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" linktext="" linkurl="" url={job.url}/>
              )}
            </div>
            <div className="col-4">
              <Sidebar /> 
            </div>
          </div>
        </div>
      );
    }else {
      return (<img className="card-img-top hackernews-intro-img" src={require("../images/loader.gif")} alt="Loading.." />);
    }
  }
}
