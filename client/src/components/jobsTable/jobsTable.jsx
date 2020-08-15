import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


function JobsTable({ jobs, jobsSorted, onDelete, onUpdate }){
    const [editable,setEditable]=useState(false)
    return (
        <div className="JobsTable">
            <table>
                <thead>
                <tr>
                    <th onClick={() => jobsSorted('job_title')}>job_title</th>
                    <th onClick={() => jobsSorted('company')}>company</th>
                    <th onClick={() => jobsSorted('url')}>url</th>
                    <th onClick={() => jobsSorted('date_found')}>date_found</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {jobs.map(job => (
                    <tr>
                        <td>
                        {!editable?<span onClick={() => setEditable(true)}>{job.job_title}</span>:(
                          <input placeholder={job.job_title} onBlur={(ev) => onUpdate(job._id,'job_title',ev.target.value)} />  
                        )}
                        </td>
                        <td>
                        {!editable?<span onClick={() => setEditable(true)}>{job.company}</span>:(
                          <input placeholder={job.company} onBlur={(ev) => onUpdate(job._id,'job_title',ev.target.value)} />  
                        )}
                        </td>
                        <td>{job.url}</td>
                        <td>{job.date_found}</td>
                        <td><FontAwesomeIcon icon={faTrashAlt} onClick={() => onDelete(job._id)} /></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default JobsTable;