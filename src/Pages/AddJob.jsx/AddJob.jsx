import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../useAuth/useAuth';

const AddJob = () => {
   
    const navigate = useNavigate();
    const {user} = useAuth();

    const handleAddJob = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const { min, max, currency, ...newJob } = initialData;
        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');

        console.log(newJob);
        

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Job has been Published.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myPostedJobs');
                }
            });
    };

    return (
        <div className="min-h-screen bg-base-300 text-gray-300 py-10 px-6">
            <div className="max-w-5xl mx-auto bg-gray-800 shadow-lg rounded-lg p-8 border border-gray-700">
                <h2 className="text-4xl font-bold text-center text-white mb-6">Post a New Job</h2>
                <form onSubmit={handleAddJob} className="space-y-6 p-6 rounded-lg">
                    {/* Job Details Section */}
                    <h3 className="text-xl font-semibold text-gray-300">Job Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name='title' placeholder="Job Title" className="input input-bordered w-full bg-gray-700 text-white" required />
                        <input type="text" name='location' placeholder="Job Location" className="input input-bordered w-full bg-gray-700 text-white" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select name="jobType" defaultValue={'Pick a Job Type'} className="select select-bordered w-full bg-gray-700 text-white" required>
                            <option disabled>Pick a Job Type</option>
                            <option>Full-time</option>
                            <option>Intern</option>
                            <option>Part-time</option>
                        </select>
                        <select name="jobField" defaultValue={'Pick a Job Field'} className="select select-bordered w-full bg-gray-700 text-white" required>
                            <option disabled>Pick a Job Field</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Teaching</option>
                        </select>
                    </div>

                    {/* Salary Section */}
                    <h3 className="text-xl font-semibold text-gray-300">Salary Information</h3>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <input type="number" name='min' placeholder="Min Salary" className="input input-bordered w-full bg-gray-700 text-white" required />
                        <input type="number" name='max' placeholder="Max Salary" className="input input-bordered w-full bg-gray-700 text-white" required />
                        <select name="currency" className="select select-bordered w-full bg-gray-700 text-white" required>
                            <option disabled>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                    </div>

                    {/* Job Description */}
                    <h3 className="text-xl font-semibold text-gray-300">Job Description</h3>
                    <textarea name="description" className="textarea textarea-bordered w-full bg-gray-700 text-white" placeholder="Job Description" required></textarea>
                    <input type="text" name='company' placeholder="Company Name" className="input input-bordered w-full bg-gray-700 text-white" required />
                    <textarea name="requirements" className="textarea textarea-bordered w-full bg-gray-700 text-white" placeholder="Job Requirements (one per line)" required></textarea>
                    <textarea name="responsibilities" className="textarea textarea-bordered w-full bg-gray-700 text-white" placeholder="Job Responsibilities (one per line)" required></textarea>

                    {/* HR & Deadline Info */}
                    <h3 className="text-xl font-semibold text-gray-300">HR & Deadline</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name='hr_name' placeholder="HR Name" className="input input-bordered w-full bg-gray-700 text-white" required />
                        <input type="email" name='hr_email' defaultValue={user?.email} placeholder="HR Email" className="input input-bordered w-full bg-gray-700 text-white" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="date" name='applicationDeadline' placeholder="Deadline" className="input input-bordered w-full bg-gray-700 text-white" required />
                        <input type="url"  name='company_logo' placeholder="Company Logo URL" className="input input-bordered w-full bg-gray-700 text-white" required />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className= "w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddJob;