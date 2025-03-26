import React, { useEffect, useState } from 'react';
import useAuth from '../../useAuth/useAuth';
import Swal from 'sweetalert2';

const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(error => console.error("Error fetching jobs:", error));
    }, [user.email]);

    // Delete Job Application
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to recover this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:5000/job-application/${id}`, {
                        method: "DELETE",
                    });

                    const data = await response.json();

                    if (data.success) {  
                        Swal.fire("Deleted!", "Your job application has been deleted.", "success");

                        setJobs(prevJobs => prevJobs.filter(job => job._id !== id)); // ✅ Update UI state
                    } else {
                        Swal.fire("Error!", "Failed to delete the application.", "error");
                    }
                } catch (error) {
                    console.error("Error deleting application:", error);
                    Swal.fire("Error!", "Something went wrong.", "error");
                }
            }
        });
};

return (
    <div className="min-h-screen bg-base-300 text-white py-10 px-6">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">My Applications: {jobs.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full border border-gray-700 text-white">
                    {/* Table Head */}
                    <thead className="bg-gray-600 text-gray-300">
                        <tr>
                            <th className="px-4 py-3 text-center">

                            </th>
                            <th className="px-4 pl-6 py-3">Job</th>
                            <th className="px-4 py-3">Company</th>
                            <th className="px-4 py-3">Location</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {jobs.length > 0 ? (
                            jobs.map((job) => (
                                <tr key={job._id} className="hover:bg-gray-800 transition duration-300">
                                    <td className="px-4 py-3 text-center">
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </td>
                                    <td className="px-4 py-3 flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={job.company_logo} alt="Company Logo" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-lg">{job.title}</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">{job.company}</td>
                                    <td className="px-4 py-3">{job.location}</td>
                                    <td className="px-4 py-3">
                                        <button onClick={() => handleDelete(job._id)} className="btn btn-error btn-sm text-white">✖</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-6 text-gray-400">
                                    No job applications found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);
};

export default MyApplications;
