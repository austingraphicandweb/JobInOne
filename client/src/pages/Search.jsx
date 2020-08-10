import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function ContainedButtons() {
    const classes = useStyles();
    return (
        <div className="wrapper">
            <div className={classes.root}>
                <h2>Search Jobs</h2>
                {/**
             * input form
             */}

                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-secondary" label="Job Title" color="secondary" />
                    <TextField id="standard-secondary" label="Position Level" color="secondary" />
                    <TextField id="standard-secondary" label="Zip Code" color="secondary" />
                </form>
                {/*submit button*/}
                <Button variant="contained">Search</Button>
            </div>
            <div>
                {/**
              * show results form.
              */}
                <p>Output of results from the api call.</p>
            </div>
        </div>
    );
}