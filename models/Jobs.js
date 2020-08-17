const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSearch = new Schema({
    job_title: {
        type: String,
        trim: true,
        required: 'The job title is required within the search.'
    },
    company: {
        type: String,
        trim: true,
        required: 'please enter in the name of the password.'
    },
    url: {
        type: String,
        trim: true,
        required: 'please enter in the url of the job post.'
    },
    date_found: {
        type: String,
        trim: true,
        required: 'please enter in the date of when you found the job'
    }
});

const Job = mongoose.model('Job', JobSearch);

module.exports = Job;