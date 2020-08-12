import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import API from '../utils/API';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

// instead of job_title, position_level, zip_code i am going to switch it up to save jobs to database and the input fields need to be job_title, company, url, date_found.
export default function ContainedButtons() {
    const [job_title, setJobTitle] = useState('')
    const [company, setCompany] = useState('')
    const [url, setUrl] = useState('')
    const [date_found, setDateFound] = useState('')
    const handleClick = () => {
        console.log(job_title)
        API.getJob(job_title).then(response => {
            console.log(response.data);
        })
    }
    const classes = useStyles();
    return (
        <div className="wrapper">
            <div className={classes.root}>
                <h2>Add a new job</h2>
                {/**
             * input form
             */}

                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-secondary" value={job_title} label="Job Title" color="secondary" onChange={(e) => setJobTitle(e.target.value)} />
                    <TextField id="standard-secondary" value={company} label="company" color="secondary" onChange={(e) => setCompany(e.target.value)} />
                    <TextField id="standard-secondary" value={url} label="url" color="secondary" onChange={(e) => setUrl(e.target.value)} />
                    <TextField id="standard-secondary" value={date_found} label="date_found" color="secondary" onChange={(e) => setDateFound(e.target.value)} />
                </form>
                {/*submit button*/}
                <Button variant="contained" onClick={handleClick}>Add</Button>
            </div>
            <div>
                {/**
              * show results form.
              */}
                <p>Output of results from the api call will go here.</p>
            </div>
        </div>
    );
}
