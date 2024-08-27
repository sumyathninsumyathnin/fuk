import React from 'react'
import Layout from '../../components/Layout'
import { IoPersonOutline, IoSchoolOutline } from 'react-icons/io5';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const TeacherDetails = () => {

    const teacher = {
    email: 'nawlaywar@ucsm.edu.mm',
    department: 'FCS',
    photoUrl : 'data:image/jpeg;base64,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',
    joiningDate: '2020-01-15',
    attendance: [
      { date: '2024-08-22', status: 'Present', checkIn: '09:00 AM' },
      { date: '2024-08-21', status: 'Absent', checkIn: 'N/A' },
      // Additional attendance records
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
            <button className="mb-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center transition duration-100 hover:bg-gray-400 hover:text-gray-900 shadow-md" onClick={handleBackClick}>
                    <IoArrowBack className="text-xl mr-2" />
                    Back
            </button>

                <h2 className="text-3xl font-bold mb-6 text-gray-700">Teacher Details</h2>

            <div className=' flex justify-between'>
                {/* Student Photo */}
                <div className="w-1/2 mb-6 ">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">Teacher Photo</h3>
                    <div className="pl-4 flex items-center">
                    <img
                        src={teacher.photoUrl}
                        alt="Student"
                        className="w-32 h-32 rounded-full border-2 border-gray-300"
                    />
                    </div>
                </div>
                {/* Personal Information */}
                <div className="w-1/2 mb-6">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">Personal Information</h3>
                    <div className="space-y-4">
                    <div className="flex items-center">
                        <IoPersonOutline className="text-xl text-gray-400 mr-4" />
                        <div>
                        <p className="text-gray-500">Email</p>
                        <p className="font-medium text-gray-700">{teacher.email}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <IoSchoolOutline className="text-xl text-gray-400 mr-4" />
                        <div>
                        <p className="text-gray-500">Department</p>
                        <p className="font-medium text-gray-700">{teacher.department}</p>
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
                    {teacher.attendance.map((record, index) => (
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

export default TeacherDetails
