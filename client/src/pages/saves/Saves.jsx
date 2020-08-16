import React, { Component } from 'react';
import '../saves/saves.css';
import JobsTable from '../../components/jobsTable/jobsTable';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//using a class to write the javascript list
class JobsList extends Component {

    componentDidMount(){
        this.getJobs();
    }
    // getJobs = () => {
    //     axios 
    //         .get('/job')
    //         .then((response) => {
    //             this.setState({
    //                 jobs: response.data.data,
    //             })
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    // }

    getJobs = () => {
        location.reload();
    }

    deleteJob = (id) => {
        axios
            .delete(`/job/${id}`)
            .then((response) => {
                this.getJobs();
                toast.error('Job deleted!');
            }).catch((err) => {
                console.log(err);
            })
    }
    //using stateful react code. below are two seeds.
    state = {
        //importing json data from jobs.json
        search: "",
        jobs: [],
        filter: [],
        sort: [],
        filteredJobs: [],
        sortedJobs: []
    }
    handleChange = (e) => {
        this.setState({search:e.target.value});
        this.jobsFilter(this.state.search);
    }

    clearFormField = () => {
        this.setState({search:''})
        this.getJobs();
    }

    jobsFilter = (value) => {
        //starting at the 0 character i am going the length of what I type in and comparing it to the data which will be returned in the new array. it filters by nam
        const jobs = this.state.jobs.filter(job => job.job_title.slice(0, value.length).toLowerCase() === value.toLowerCase() || job.company.slice(0, value.length).toLowerCase() === value.toLowerCase() || job.url.slice(0, value.length).toLowerCase() === value.toLowerCase() || job.date_found.slice(0, value.length).toLowerCase() === value.toLowerCase());
        this.setState({ jobs: jobs });
    }
    jobsSorted = (property) => {
        //sorting from a to z. It is a public domain algorithm. If the data is out of order then it switches otherwise it does nothing.
        const jobs = this.state.jobs.sort(function (a, b) {
            if (a[property].toLowerCase() < b[property].toLowerCase()) { return -1; }
            if (a[property].toLowerCase() > b[property].toLowerCase()) { return 1; }
            return 0;
        })
        this.setState({ jobs: jobs });
    }
    updateJob = (id,property,value) => {
        if(value.length < 3){
            return
        }
        // creating an empty object that will be filled with the information from the api call
        let job = {}
        job[property]=value
            axios
                .put(`/job/${id}`, job)
                .then((response) => {
                    this.getJobs();
                    toast.warning('Job Updated!');
                })
    }
    //this is where I am writing out what is going to be on the web page for the user to see. It is a mix of html and javascript using react. A big difference is the usage of curleys instead of perenthesies for the properties on each line. This allows me to incorporate javascript directly into the html and traverse the object at the top of this document so that the output is dynamic and uses 'hot reloading'
    render() {
        return (
            <div className="savedJobs">
                <h1>Saved Jobs</h1>
                {/*below is where I am using the react way of writing code and taking my html and javascript languages and mixing them together within the properties of each html element. */}
                < input type="text" onChange={this.handleChange} value={this.state.search} />
                <button onClick={this.clearFormField} className="button">Reset</button>
               <JobsTable jobs={this.state.jobs} jobsSorted={this.jobsSorted} onDelete={this.deleteJob} onUpdate={this.updateJob} />
            </div >
        );
    }
}

export default JobsList;