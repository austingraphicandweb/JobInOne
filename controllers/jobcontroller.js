const Job = require('../models/Jobs');

//Create a new job for the database
createJob = (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success: false,
            error: "please fill out all the required fields"
        })
    }

const job = new Job(body)

if (!job){
    return res.status(400).json({
        success:false,
        error:err
    })
}

job
    .save()
    .then(() => {
        return res.status(201).json({
            success:true,
            id:job._id,
            message:'job created!!'
        })
    }) .catch(error => {
        return res.status(400).json({
            error,
            message:'job not created :('
        })
    })
}

// Read a job in the database
getJobs = async (req,res) => {
    await Job.find({}, (err,jobs) => {
        if (err) {
            return res.status(400).json({success:false,error:err})
        }
        if (!jobs.length) {
            return res
                .status(404)
                .json({success:false, error:'the job was not found...'})
        }
        return res.status(200).json({success:true, data:jobs})
    })
}

// Update a job that is in the database
updateJob = async (req,res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'Please specify which job you want to update'
        })
    }

    Job.findOne(
        {_id:req.params.id}, (err,job) => {
            if (err) {
                return res.status(404).json({
                    err,
                    message:'Job not found',
                })
            }
            job.job_title = body.job_title
            job.company = body.company
            job.url = body.url
            job.date_found = body.date_found
            job
                .save()
                .then(() => {
                    return res.status(200).json({
                        success:true,
                        id:job._id,
                        message:'job is updated!!',
                    })
                })
                .catch(error => {
                    return res.status(404).json({
                        error,
                        message:'job not updated...',
                    })
                })
        })
}

// Delete a job that is in the database
deleteJob = async (req,res) => {
    await Job.findOneAndDelete({_id:req.params.id}, (err,job) => {
        if (err) {
            return res.status(400).json({success:false, error:err})
        }
        if (!job) {
            return res
                .status(404)
                .json({success:false,error:'job is not found...'})
        }
        return res.status(200).json({success:true,data:job})
    }).catch(err => 
        console.log(err)
    )
}