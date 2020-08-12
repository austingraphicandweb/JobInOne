/**
 * This file might not be necessary since I am not going to do external api calls.
 */

//make different js sheets to make calls to each different website
import axios from "axios";

export default {
  // Gets all jobs
  getJobs: function() {
    return axios.get("/api/jobs");
  },
  // Gets the job with the given id
  getJob: function(name) {
    return axios.get("/api/jobs/" + name);
  },
  // Deletes the job from the users profile
  deleteJob: function(id) {
    return axios.delete("/api/jobs/" + id);
  },
  // Saves a job to the database
  saveSearch: function(searchData) {
    return axios.post("/api/jobs", searchData);
  },
  postSearch: function(post) {
    return axios.post('/api/jobs/', post)
  }
};
