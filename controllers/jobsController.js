const express = require('express');
const router = express.Router();
const db = require('../models');
const { replaceOne } = require('../models/Jobs');

// READ ALL
router.get('/jobs', (req,res) => {
    db.Job.find({}).then(foundJobs => {
        res.json({
            error:false,
            data:foundJobs,
            message:'Successfully retrieved jobs from the source.'
        }).catch((err) => {
            res.status(500).json({
                error:true,
                data:null,
                message:'Unable to get the jobs from the job source.'
            })
        })
    })
})

router.get('/jobs/:name', (req,res) => {
    console.log(req.params.name)
    db.Job.find({
        job_title:req.params.name
    })
})
// READ ONE

// CREATE

//EDIT

//DELETE

module.exports = router;