import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import '../jobsTable/jobsTable.css';


function JobsTable({ jobs, jobsSorted, onDelete, onUpdate }) {
  //setting state that is going to be used throughout the rest of the page
  const [editable, setEditable] = useState(false)
  return (
    <div>
      <table className="jobsTable">
        <thead>
          <tr>
            {/**
             * When a table is clicked, then then each data row is sorted by using the jobsSorted function which is stored on the Saves.jsx page.
             */}
            <th onClick={() => jobsSorted('job_title')}>job_title</th>
            <th onClick={() => jobsSorted('company')}>company</th>
            <th onClick={() => jobsSorted('url')}>url</th>
            <th onClick={() => jobsSorted('date_found')}>date_found</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/**
           * 
           */}
          {jobs.map(job => (
            <tr>
              {/**
               * Using a conditional operator to edit the tables. The conditional operator sits on top of the input field and when the table cell is clicked, it allows the table cell to be edited and updated by the user.
               */}
              <td className="td">
                {!editable ? <span onClick={() => setEditable(true)}>{job.job_title}</span> : (
                  <input placeholder={job.job_title} onBlur={(ev) => onUpdate(job._id, 'job_title', ev.target.value)} />
                )}
              </td>
              <td className="td">
                {!editable ? <span onClick={() => setEditable(true)}>{job.company}</span> : (
                  <input placeholder={job.company} onBlur={(ev) => onUpdate(job._id, 'company', ev.target.value)} />
                )}
              </td>
              <td className="td">
                {!editable ? <span onClick={() => setEditable(true)}>{job.url}</span> : (
                  <input placeholder={job.url} onBlur={(ev) => onUpdate(job._id, 'url', ev.target.value)} />
                )}
              </td>
              <td className="td">
                {!editable ? <span onClick={() => setEditable(true)}>{job.date_found}</span> : (
                  <input placeholder={job.date_found} onBlur={(ev) => onUpdate(job._id, 'date_found', ev.target.value)} />
                )}
              </td>
              <td className="td"><FontAwesomeIcon icon={faTrashAlt} onClick={() => onDelete(job._id)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobsTable;