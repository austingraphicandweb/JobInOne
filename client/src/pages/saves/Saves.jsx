import React, { Component } from 'react';
import '../saves/saves.css';
import jobs from '../../jobs.json';
import JobsTable from '../../components/jobsTable/jobsTable';

//using a class to write the javascript list
class JobsList extends Component {
    //using stateful react code. below are two seeds.
    state = {
        //importing json data from jobs.json
        jobs: jobs,
        filter: [],
        sort: [],
        filteredJobs: jobs,
        sortedJobs: jobs
    }

    jobsFilter(value) {
        //starting at the 0 character i am going the length of what I type in and comparing it to the data which will be returned in the new array. it filters by nam
        const jobs = this.state.jobs.filter(job => job.job_title.slice(0, value.length).toLowerCase() === value.toLowerCase() || job.job_company.slice(0, value.length).toLowerCase() === value.toLowerCase() || job.url.slice(0, value.length).toLowerCase() === value.toLowerCase() || job.date_found.slice(0, value.length).toLowerCase() === value.toLowerCase());
        this.setState({ filteredJobs: jobs });
    }
    jobsSorted = (property) => {
        //sorting from a to z. It is a public domain algorithm. If the data is out of order then it switches otherwise it does nothing.
        const jobs = this.state.jobs.sort(function (a, b) {
            if (a[property].toLowerCase() < b[property].toLowerCase()) { return -1; }
            if (a[property].toLowerCase() > b[property].toLowerCase()) { return 1; }
            return 0;
        })
        this.setState({ filteredJobs: jobs });
    }
    //this is where I am writing out what is going to be on the web page for the user to see. It is a mix of html and javascript using react. A big difference is the usage of curleys instead of perenthesies for the properties on each line. This allows me to incorporate javascript directly into the html and traverse the object at the top of this document so that the output is dynamic and uses 'hot reloading'
    render() {
        return (
            <div className="savedJobs">
                <h1>Saved Jobs</h1>
                {/*below is where I am using the react way of writing code and taking my html and javascript languages and mixing them together within the properties of each html element. */}
                < input type="text" onChange={ev => this.jobsFilter(ev.target.value)} />
                <button onClick={ev => this.setState({ jobs: [...this.state.jobs, { name: this.state.name }] })}>Add</button>
                <JobsTable jobs={this.state.filteredJobs} jobsSorted={this.jobsSorted} />
            </div >
        );
    }
}

export default JobsList;