const Job = require('../models/Jobs');
const express = require("express");
const router = express.Router();



//Create a new job for the database
router.post('/job', (req, res) => {
    Job.create(req.body)
        .then((createdJob) => {
            res.json({
                err: false,
                data: createdJob,
                message: "created job"
            })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({
                err: true,
                data: null,
                message: "unable to create job"
            })
        })
})

// Read a job in the database
router.get('/job', (req, res) => {
    Job.find({})
        .then((foundJobs) => {
            res.json({
                error: false,
                data: foundJobs,
                message: 'successfully found jobs'
            })
        }).catch((err) => {
            res.status(500).json({
                error: true,
                data: null,
                message: 'can not retrieve jobs'
            })
        })
})

// Update a job that is in the database
router.put('/job/:id', (req, res) => {
    Job.findOneAndUpdate({
            _id: req.params.id
        }, req.body)
        .then((updatedJob) => {
            res.json({
                error: false,
                data: updatedJob,
                message: 'successfully updated job'
            })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({
                error: true,
                data: null,
                message: 'failed to update job'
            })
        })
})

// Delete a job that is in the database
router.delete('/job/:id', (req, res) => {
    Job.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json({
                error: false,
                data: result,
                message: 'job deleted'
            })
        }).catch((err) => {
            res.status(500).json({
                error: true,
                data: null,
                message: 'job was not deleted'
            })
        })
})

module.exports = router;