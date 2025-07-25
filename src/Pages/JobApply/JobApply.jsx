import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hook/useAuth';

const JobApply = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const { user } = useAuth();
    // console.log(id,user);    

    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.elements.name.value;
        const phone = form.elements.phone.value;
        const linkedIn = form.elements.linkedIn.value;
        const github = form.elements.github.value;

        const jobApplication = {
            job_id: id,
            name,
            applicant_email: user.email,
            linkedIn,
            phone,
            github,
        }

        fetch('http://localhost:5000/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your application has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                navigate('/myApplications');

            })

    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-800 my-10 text-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Job Application</h1>
            <form className="space-y-4" onSubmit={submitJobApplication}>
                <div>
                    <label className="block text-gray-300">Full Name</label>
                    <input type="text" name="name" className="w-full p-2 border rounded bg-gray-700 text-white" required />
                </div>
                <div>
                    <label className="block text-gray-300">Phone Number</label>
                    <input type="tel" name="phone" className="w-full p-2 border rounded bg-gray-700 text-white" required />
                </div>
                <div>
                    <label className="block text-gray-300">LinkedIn Profile</label>
                    <input type="url" name="linkedIn" className="w-full p-2 border rounded bg-gray-700 text-white" placeholder="https://linkedin.com/in/yourprofile" required />
                </div>
                <div>
                    <label className="block text-gray-300">GitHub Profile</label>
                    <input type="url" name="github" className="w-full p-2 border rounded bg-gray-700 text-white" placeholder="https://github.com/yourprofile" required />
                </div>
                <div>
                    <label className="block text-gray-300">Resume</label>
                    <input type="file" name="resume" className="w-full p-2 border rounded bg-gray-700 text-white" required />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default JobApply;
