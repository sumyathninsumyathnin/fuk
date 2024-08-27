import React ,{useState} from 'react'
import Layout from '../../components/Layout'
import { IoSaveOutline} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const EditTimesDetails = () => {

    const [dayOfWeek, setDayOfWeek] = useState('timetable.dayOfWeek');
    const [startTime, setStartTime] = useState('timetable.startTime');
    const [endTime, setEndTime] = useState('timetable.endTime');
    const [roomNo, setRoomNo] = useState('timetable.roomNo');
    const [teacherEmail, setTeacherEmail] = useState('timetable.teacherEmail');
    const [academicYear, setAcademicYear] = useState('timetable.academicYear');
    const navigate = useNavigate();

    const handleSave = () => {
        // Logic to save the updated timetable details
        navigate('/timetable-list'); // Redirect to the timetable list page after saving
    };

    const handleCancel = () => {
        navigate(-1); // Return to the previous page without saving
    };

    return (
        <Layout>
            <div>
                <div className="bg-white p-6 rounded-lg shadow-md w-4/6 mx-auto mt-10">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-700">Edit Timetable</h2>
                </div>
                <form>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Day of the Week</label>
                    <select
                        value={dayOfWeek}
                        onChange={(e) => setDayOfWeek(e.target.value)}
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    >
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                    </select>
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Start Time</label>
                    <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">End Time</label>
                    <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Room Number</label>
                    <input
                        type="text"
                        value={roomNo}
                        onChange={(e) => setRoomNo(e.target.value)}
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                        placeholder="Enter Room Number"
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Teacher Email</label>
                    <input
                        type="email"
                        value={teacherEmail}
                        onChange={(e) => setTeacherEmail(e.target.value)}
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                        placeholder="Enter Teacher Email"
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Academic Year</label>
                    <select
                        value={academicYear}
                        onChange={(e) => setAcademicYear(e.target.value)}
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    >
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="5th Year">5th Year</option>
                    </select>
                    </div>
                    <div className="mt-6 flex justify-end space-x-4">
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-100" onClick={handleCancel}>
                        Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl"
                        >
                            <IoSaveOutline className="text-xl mr-2" />
                            Save Changes
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </Layout>
    )
}

export default EditTimesDetails
