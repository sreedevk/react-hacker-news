import React, { Component } from 'react';
import PageTitle from '../shared/pageTitle';
import JobItem from './jobItem';
import Sidebar from '../shared/sidebar';
import { Helmet } from 'react-helmet';
import Loader from '../shared/loader';

export default class Jobs extends Component {
  state = {
    loading: true
  }

  async componentDidMount(){
    const response = await fetch("https://api.hnpwa.com/v0/jobs/1.json"); 
    this.setState({jobs: await response.json()});
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
      return(<Loader />)
    }
  }
}
