import React, { useEffect, useState } from 'react';
import useAuth from './../../useAuth/useAuth';

const MyPostedJob = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])


    return (
        <div>
            <h2 className='text-3xl'>My Posted Jobs: {jobs.length}</h2>
        </div>
    );
};

export default MyPostedJob;