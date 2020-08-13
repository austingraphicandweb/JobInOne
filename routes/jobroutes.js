const express = require('express');
const JobCtrl = require('../controllers/jobcontroller');
const router = express.Router();

router.post('/job', JobCtrl.createJob)
router.put('/job/:id', JobCtrl.updateJob)
router.delete('/movie/:id', JobCtrl.deleteJob)
router.get('/job/:id', JobCtrl.getJobById)
router.get('/job', JobCtrl.getJobs)

module.exports = router;