import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplication = () => {
    const applications = useLoaderData();
    
    return (
        <div className="bg-base-300 min-h-screen p-6 text-white">
            <h2 className="text-3xl text-center font-bold mb-6">Applications for this job: {applications.length}</h2>
            <div className="bg-gray-700 shadow-lg mx-8 rounded-lg p-6">
                {applications.map((app, index) => (
                    <div key={app._id} className="mb-4 p-4 border-b border-gray-600">
                        <h3 className="text-xl font-semibold">{app.name}</h3>
                        <p className="text-gray-300">Email: {app.applicant_email}</p>
                        <p className="text-gray-300">Phone: {app.phone}</p>
                        <p className="text-gray-300">LinkedIn: <a href={app.linkedIn} className="text-blue-400" target="_blank" rel="noopener noreferrer">{app.linkedIn}</a></p>
                        <p className="text-gray-300">GitHub: <a href={app.github} className="text-blue-400" target="_blank" rel="noopener noreferrer">{app.github}</a></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewApplication;