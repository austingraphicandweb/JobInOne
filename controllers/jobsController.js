// const express = require('express');
// const router = express.Router();
// const db = require('../models');
// const { replaceOne } = require('../models/Jobs');
// const app = express();
// app.use(express.static("dist"));
// // READ ALL
// app.get('/jobs', (req,res) => {
//     db.Job.find({}).then(foundJobs => {
//         res.json({
//             error:false,
//             data:foundJobs,
//             message:'Successfully retrieved jobs from the source.'
//         }).catch((err) => {
//             res.status(500).json({
//                 error:true,
//                 data:null,
//                 message:'Unable to get the jobs from the job source.'
//             })
//         })
//     })
//     console.log("hello world!");
//     res.send('stringggg');
// })

// router.get('/jobs/:name', (req,res) => {
//     console.log(req.params.name)
//     db.Job.find({
//         job_title:req.params.name
//     })
// })
// // READ ONE

// // CREATE
// app.post('/jobs', (req,res) => {
//     res.send(req.body);
// })

// //EDIT

// //DELETE

// module.exports = router;