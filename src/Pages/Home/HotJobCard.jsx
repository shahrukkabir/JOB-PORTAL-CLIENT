import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
    if (!job) return null;

    const {
        _id,
        title,
        location,
        jobType,
        company,
        salaryRange,
        description,
        requirements,
        company_logo
    } = job;

    return (
        <div className="bg-gray-800 text-gray-200 p-5 rounded-xl shadow-lg flex flex-col justify-between">
            {/* Company Info */}
            <div>
                <div className="flex items-center gap-3">
                    {company_logo && <img src={company_logo} alt={company} className="w-12 h-12 rounded-full" />}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-100">{company}</h2>
                        <p className="text-gray-400 flex items-center"><IoLocationOutline className="mr-1" />{location}</p>
                    </div>
                </div>

                {/* Job Title & Type */}
                <h3 className="text-xl font-bold mt-3 text-gray-100">{title}</h3>
                <p className="text-sm text-gray-400">{jobType}</p>
                <p className="mt-2 text-gray-300">{description}</p>

                {/* Skills */}
                <div className="mt-3">
                    <span className="font-bold text-gray-100">Skills:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {requirements?.map((skill, index) => (
                            <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Salary */}
                <div className="mt-3 font-bold text-blue-400">
                    Salary: {salaryRange?.min} - {salaryRange?.max} {salaryRange?.currency.toUpperCase()}
                </div>
            </div>

            {/* Apply Now Button */}
            <Link to={`/jobs/${_id}`}><button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full">Apply Now </button></Link>
        </div>
    );
};

export default HotJobCard;
