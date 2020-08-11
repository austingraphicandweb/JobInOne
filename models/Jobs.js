const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSearch = new Schema({
    job_title: {
        type: String,
        trim: true,
        required: 'The job title is required within the search.'
    },
    position_level: {
        type: String,
        trim: true,
        required: 'You need to specify what level of position you are looking for.'
    },
    zip_code: {
        type: Number,
        required: 'Please enter in a valid zip code.'
    }
});

const Job = mongoose.model('Job',JobSearch);

module.exports = Job;