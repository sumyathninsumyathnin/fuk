import React , {useState} from 'react'
import Layout from '../../components/Layout'
import { IoAddCircleOutline  } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const AddNewTime = () => {

    const [dayOfWeek, setDayOfWeek] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [room, setRoom] = useState('');
    const [year, setYear] = useState('');
    const [trEmail, setTrEmail] = useState('');
    const navigate = useNavigate();

    const handleSave = (e) => {
      e.preventDefault();
      // Logic to save the new timetable
      navigate('/dashboard/times'); // Redirect to timetable list page after saving
    };

    const handleCancel = () => {
      navigate(-1); // Return to the previous page without saving
    };

    return (
        <Layout>
            <div>
                <div className="bg-white p-6 rounded-lg shadow-md w-4/6 mx-auto mt-10">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-700">Add New Timetable</h2>
                </div>
                <form>
                  {/* week of day */}
                  <div className="mb-4">
                    <label htmlFor='dayofweek' className="block text-gray-700 text-sm font-bold mb-2">Day of the Week</label>
                    <select
                      value={dayOfWeek}
                      id='dayofweek'
                      onChange={(e) => setDayOfWeek(e.target.value)}
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select Day</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                    </select>
                  </div>
                  {/* start time */}
                  <div className="mb-4">
                    <label htmlFor='starttime' className="block text-gray-700 text-sm font-bold mb-2">Start Time</label>
                    <input 
                      type="time"
                      id="startTime"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  {/* end time */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">End Time</label>
                    <input 
                      type="time"
                      id="endtime"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  {/* for room */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Room</label>
                    <select
                      value={room}
                      onChange={(e) => setRoom(e.target.value)}
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select Room</option>
                      <option value="Room 101">Room 101</option>
                      <option value="Room 102">Room 102</option>
                      <option value="Room 103">Room 103</option>
                    </select>
                  </div>
              {/* year */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Year</label>
                    <select
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select Year</option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="5th Year">5th Year</option>
                    </select>
                  </div>
                  {/* Teacher */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Teacher's Email</label>
                    <select
                      value={trEmail}
                      onChange={(e) => setTrEmail(e.target.value)}
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select Teacher's Email</option>
                      <option value="nawlaywar@ucsm.edu.mm">nawlaywar@ucsm.edu.mm</option>
                      <option value="myokhaing@ucsm.edu.mm">myokhaing@ucsm.edu.mm</option>
                      <option value="yiyihlaing@ucsm.edu.mm">yiyihlaing@ucsm.edu.mm</option>
                      
                    </select>
                  </div>
                  <div className="flex justify-between">
                    <button onClick={handleSave}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center transition duration-100 hover:bg-green-600 shadow-2xl">
                      <IoAddCircleOutline className="text-xl mr-2" />
                      Add Timetable
                    </button>
                    <button onClick={handleCancel} type="button" className="bg-gray-500 text-white px-4 py-2 rounded-lg flex items-center transition duration-100 hover:bg-gray-600">
                        Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
        </Layout>
    )
}

export default AddNewTime
