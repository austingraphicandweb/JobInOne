import React from 'react';


function JobsTable({ jobs, jobsSorted }) {
    return (
        <div className="JobsTable">
            <table>
                <tr>
                    <th onClick={() => jobsSorted('job_title')}>job_title</th>
                    <th onClick={() => jobsSorted('company')}>company</th>
                    <th onClick={() => jobsSorted('url')}>url</th>
                    <th onClick={() => jobsSorted('date_found')}>date_found</th>
                </tr>
                {jobs.map(job => (
                    <tr>
                        <td>{job.job_title}</td>
                        <td>{job.company}</td>
                        <td>{job.url}</td>
                        <td>{job.date_found}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default JobsTable;