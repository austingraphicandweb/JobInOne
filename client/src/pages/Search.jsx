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


export default function ContainedButtons() {
    const [job_title, setJobTitle] = useState('')
    const [position_level, setPositionLevel] = useState('')
    const [zip_code, setZipCode] = useState('')
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
                <h2>Search Jobs</h2>
                {/**
             * input form
             */}

                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-secondary" value={job_title} label="Job Title" color="secondary" onChange={(e) => setJobTitle(e.target.value)} />
                    <TextField id="standard-secondary" value={position_level} label="Position Level" color="secondary" onChange={(e) => setPositionLevel(e.target.value)} />
                    <TextField id="standard-secondary" value={zip_code} label="Zip Code" color="secondary" onChange={(e) => setZipCode(e.target.value)} />
                </form>
                {/*submit button*/}
                <Button variant="contained" onClick={handleClick}>Search</Button>
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
