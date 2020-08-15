import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import '../jobsTable/jobsTable.css';


function JobsTable({ jobs, jobsSorted, onDelete, onUpdate }){
    const [editable,setEditable]=useState(false)
    return (
        <div>
            <table className="jobsTable">
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
                          <input placeholder={job.company} onBlur={(ev) => onUpdate(job._id,'company',ev.target.value)} />  
                        )}
                        </td>
                        <td>
                        {!editable?<span onClick={() => setEditable(true)}>{job.url}</span>:(
                          <input placeholder={job.url} onBlur={(ev) => onUpdate(job._id,'url',ev.target.value)} />  
                        )}
                        </td>
                        <td>
                        {!editable?<span onClick={() => setEditable(true)}>{job.date_found}</span>:(
                          <input placeholder={job.date_found} onBlur={(ev) => onUpdate(job._id,'date_found',ev.target.value)} />  
                        )}
                        </td>
                        <td><FontAwesomeIcon icon={faTrashAlt} onClick={() => onDelete(job._id)} /></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default JobsTable;