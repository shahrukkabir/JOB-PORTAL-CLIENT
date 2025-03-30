import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [user.email]);

    return (
        <div className="bg-base-300 min-h-screen p-6 text-white">
            <h2 className="text-3xl text-center font-bold mb-6">My Posted Jobs ({jobs.length})</h2>
            <div className="bg-gray-700 shadow-lg rounded-lg overflow-hidden">
                <table className="w-full table-auto border-collapse text-gray-300">
                    <thead>
                        <tr className="bg-gray-800 text-gray-100">
                            <th className="px-6 py-3 text-left">#</th>
                            <th className="px-6 py-3 text-left">Job Title</th>
                            <th className="px-6 py-3 text-left">Deadline</th>
                            <th className="px-6 py-3 text-left">Applicants</th>
                            <th className="px-6 py-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, index) => (
                            <tr key={job._id} className="border-b border-gray-600 hover:bg-gray-600">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4 font-medium text-white">{job.title}</td>
                                <td className="px-6 py-4">{job.applicationDeadline}</td>
                                <td className="px-6 pl-8 py-4">{job.applicationCount}</td>
                                <td className="px-6 py-4">
                                    <Link to={`/viewApplications/${job._id}`}>
                                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">View</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;