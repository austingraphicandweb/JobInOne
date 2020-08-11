const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSearch = new Schema({

});

const Job = mongoose.model('Job',JobSearch);

module.exports = Job;