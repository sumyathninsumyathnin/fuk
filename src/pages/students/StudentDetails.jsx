import React from 'react'
import Layout from '../../components/Layout'
import {  IoSchoolOutline} from 'react-icons/io5';
import {IoArrowBack} from 'react-icons/io5';
import { FaRegAddressCard } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const StudentDetails = () => {
    const student = {
        year: "3rd Year",
        studentId: "6871",
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMhcGlAWHMMfq0mdZM1gJHjd0WN7weD7whQ&s", // Placeholder image URL
        attendance: [
            { date: "2024-08-20", status: "Present", checkIn: "09:00 AM" },
            { date: "2024-08-21", status: "Present", checkIn: "09:05 AM" },
            { date: "2024-08-22", status: "Absent", checkIn: "-" },
            { date: "2024-08-23", status: "Present", checkIn: "09:02 AM" },
        ],
    };

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);// This will take the user back to the previous page
    };
    
  return (
    <Layout>
        <div>
            <div className="bg-white p-6 rounded-lg shadow-md w-4/6 mx-auto mt-10">
            {/* Back Button */}
            
            <button className="mb-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center transition duration-100 hover:bg-gray-400 hover:text-gray-900 shadow-md" onClick={handleBackClick}>
                    <IoArrowBack className="text-xl mr-2" />
                    Back
            </button>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-700">Student Details</h2>

            <div className=' flex justify-between'>
                {/* Student Photo */}
                <div className="w-1/2 mb-6 ">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">Student Photo</h3>
                    <div className="pl-4 flex items-center">
                    <img
                        src={student.photoUrl}
                        alt="Student"
                        className="w-32 h-32 rounded-full border-2 border-gray-300"
                    />
                    </div>
                </div>
                {/* Personal Information */}
                <div className="w-1/2 mb-6">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">Personal Information</h3>
                    <div className=" space-y-4">

                    {/* mkpt */}
                    <div className="flex items-center">
                        <FaRegAddressCard className="text-xl text-gray-400 mr-4" />
                        <div>
                        <p className="text-gray-500">Student's MKPT</p>
                        <p className="font-medium text-gray-700">{student.studentId}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <IoSchoolOutline className="text-xl text-gray-400 mr-4" />
                        <div>
                        <p className="text-gray-500">Year</p>
                        <p className="font-medium text-gray-700">{student.year}</p>
                        </div>
                    </div>
                    </div>
                </div>
                

            </div>

            

            {/* Attendance Records */}
            <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Attendance Records</h3>
                <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                    <th className="pb-2 border-b-2">Date</th>
                    <th className="pb-2 border-b-2">Status</th>
                    <th className="pb-2 border-b-2">Check-In Time</th>
                    </tr>
                </thead>
                <tbody>
                    {student.attendance.map((record, index) => (
                    <tr key={index} className='rounded-3xl transition duration-100 hover:bg-gray-500'>
                        <td className="py-2">{record.date}</td>
                        <td className="py-2">{record.status}</td>
                        <td className="py-2">{record.checkIn}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

            </div>
        </div>
    </Layout>
  )
}

export default StudentDetails
