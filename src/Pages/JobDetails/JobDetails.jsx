import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineMail } from 'react-icons/md';

const JobDetails = () => {
    const job = useLoaderData();
    if (!job) return <p className="text-center text-gray-400">Loading...</p>;

    const {
        title,
        location,
        jobType,
        company,
        salaryRange,
        description,
        requirements,
        responsibilities,
        category,
        applicationDeadline,
        hr_email,
        hr_name,
        company_logo,
    } = job;

    return (
        <div className="bg-gray-900 text-gray-200 min-h-screen py-10 px-6 lg:px-20">
            <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
                {/* Company Info */}
                <div className="flex items-center gap-4">
                    {company_logo && (
                        <img src={company_logo} alt={company} className="w-16 h-16 rounded-full" />
                    )}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-100">{company}</h2>
                        <p className="text-gray-400 flex items-center">
                            <IoLocationOutline className="mr-1" /> {location}
                        </p>
                    </div>
                </div>

                {/* Job Title & Type */}
                <h3 className="text-2xl font-bold mt-4 text-gray-100">{title}</h3>
                <p className="text-md text-gray-400">{jobType} • {category}</p>

                {/* Application Deadline */}
                <p className="mt-2 text-red-400 font-semibold">
                    Application Deadline: {applicationDeadline}
                </p>

                {/* Salary */}
                <div className="mt-4 font-semibold text-blue-400">
                    Salary: {salaryRange?.min} - {salaryRange?.max} {salaryRange?.currency.toUpperCase()}
                </div>

                {/* Job Description */}
                <div className="mt-6">
                    <h4 className="text-xl font-semibold text-gray-100">Job Description</h4>
                    <p className="text-gray-300 mt-2">{description}</p>
                </div>

                {/* Job Requirements */}
                <div className="mt-6">
                    <h4 className="text-xl font-semibold text-gray-100">Requirements</h4>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                        {requirements?.map((req, index) => (
                            <li key={index}>{req}</li>
                        ))}
                    </ul>
                </div>

                {/* Responsibilities */}
                <div className="mt-6">
                    <h4 className="text-xl font-semibold text-gray-100">Responsibilities</h4>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                        {responsibilities?.map((res, index) => (
                            <li key={index}>{res}</li>
                        ))}
                    </ul>
                </div>

                {/* HR Contact Info */}
                <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-100">HR Contact</h4>
                    <p className="text-gray-300 mt-1">HR Name: {hr_name}</p>
                    <p className="text-gray-300 mt-1 flex items-center">
                        <MdOutlineMail className="mr-2" /> {hr_email}
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg flex-1">
                        Apply Now
                    </button>
                    <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg text-lg flex-1">
                        Save Job
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
