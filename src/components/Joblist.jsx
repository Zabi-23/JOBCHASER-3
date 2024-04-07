import React from 'react';

function Job({ job }) {
    return (
        <div className='job-card'>
            <img src={job.logo} alt={job.company} className='job-logo'/>
            <div className='job-details'>
                <h2>{job.company}</h2>
                <h3>{job.position}</h3>
                <p>{job.brief}</p>
            </div>
        </div>
    );
}

function JobList({jobs}){
    console.log('Jobs in JobList', jobs);

    return (
        <div className='container'>
            {jobs.map((job)=>(
                <Job key={job.id} job={job}/>
            ))}
        </div>
    );
}

export { Job, JobList };



