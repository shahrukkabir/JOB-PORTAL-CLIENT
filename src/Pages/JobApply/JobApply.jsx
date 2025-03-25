import React from 'react';
import { useParams } from 'react-router-dom';

const JobApply = () => {
    const { id } = useParams();
    console.log("Job ID:", id);

    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        
        // Extract values from the form
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const phone = form.elements.phone.value;
        const coverLetter = form.elements.coverLetter.value;
        const resume = form.elements.resume.files[0]; 

        console.log({ id, name, email, phone, coverLetter, resume });
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
                    <label className="block text-gray-300">Email</label>
                    <input type="email" name="email" className="w-full p-2 border rounded bg-gray-700 text-white" required />
                </div>
                <div>
                    <label className="block text-gray-300">Phone Number</label>
                    <input type="tel" name="phone" className="w-full p-2 border rounded bg-gray-700 text-white" required />
                </div>
                <div>
                    <label className="block text-gray-300">Resume</label>
                    <input type="file" name="resume" className="w-full p-2 border rounded bg-gray-700 text-white" required />
                </div>
                <div>
                    <label className="block text-gray-300">Cover Letter</label>
                    <textarea name="coverLetter" className="w-full p-2 border rounded bg-gray-700 text-white" rows="4" required></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default JobApply;
