import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(err => console.error("Failed to fetch jobs:", err)); // Handle errors
    }, []);

    return (
        <div className="bg-base-300 text-gray-200 py-16 px-8">
            {/* Header */}
            <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-gray-100">Jobs of the Day</h3>
                <h3 className="text-xl text-gray-300 mt-2">{jobs.length} Jobs Available Now</h3>
                <p className="text-gray-400 mt-1">Find the job that’s perfect for you. About 20+ new jobs every day.</p>
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {jobs.length > 0 ? (
                    jobs.map(job => <HotJobCard key={job._id} job={job} />)
                ) : (
                    <p className="text-gray-400 col-span-full text-center">No jobs available at the moment.</p>
                )}
            </div>
        </div>
    );
};

export default HotJobs;
