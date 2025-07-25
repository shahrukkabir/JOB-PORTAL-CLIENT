import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplication = () => {
    const applications = useLoaderData();

    const handleStatusUpdate = (e, id) => {
        const updatedStatus = e.target.value;
        fetch(`http://localhost:5000/job-applications/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: updatedStatus })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Status has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    return (
        <div className="bg-base-300 min-h-screen p-6 text-white">
            <h2 className="text-3xl font-bold mb-6">Applications for this job: {applications.length}</h2>
            <div className="overflow-x-auto bg-gray-700 shadow-lg rounded-lg p-6">
                <table className="w-full table-auto border-collapse text-gray-300">
                    <thead>
                        <tr className="bg-gray-900 text-gray-100">
                            <th className="px-6 py-3 text-left">#</th>
                            <th className="px-6 py-3 text-left">Name</th>
                            <th className="px-6 py-3 text-left">Email</th>
                            <th className="px-6 py-3 text-left">Phone</th>
                            <th className="px-6 py-3 text-left">LinkedIn</th>
                            <th className="px-6 py-3 text-left">GitHub</th>
                            <th className="px-6 py-3 text-left">Status</th>
                            <th className="px-6 py-3 text-left">Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((app, index) => (
                            <tr key={app._id} className="border-b border-gray-600 hover:bg-gray-600">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4 font-medium text-white">{app.name}</td>
                                <td className="px-6 py-4">{app.applicant_email}</td>
                                <td className="px-6 py-4">{app.phone}</td>
                                <td className="px-6 py-4">
                                    <a href={app.linkedIn} className="text-blue-400" target="_blank" rel="noopener noreferrer">View</a>
                                </td>
                                <td className="px-6 py-4">
                                    <a href={app.github} className="text-blue-400" target="_blank" rel="noopener noreferrer">View</a>
                                </td>
                                <td className="px-6 py-4">{app.status || 'Pending'}</td>
                                <td className="px-6 py-4">
                                    <select
                                        onChange={(e) => handleStatusUpdate(e, app._id)}
                                        defaultValue={app.status || 'Pending'}
                                        className="px-2 py-1 bg-gray-800 text-white border border-gray-600 rounded">
                                        <option value="Pending">Pending</option>
                                        <option value="Under Review">Under Review</option>
                                        <option value="Set Interview">Set Interview</option>
                                        <option value="Hired">Hired</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;