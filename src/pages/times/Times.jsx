import React , {useState} from 'react'
import Layout from '../../components/Layout'
import { IoAddCircleOutline, IoEyeOutline, IoPencilOutline, IoTrashOutline } from 'react-icons/io5';
import { BiSearchAlt } from 'react-icons/bi';
import { LuFileClock } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Times = () => {
  // search 
  const [searchQuery, setSearchQuery] = useState('');
  // handle row initially show 4 rows
  const [visibleRows, setVisibleRows] = useState(4);
  // see more 
  // const [showMore, setShowMore] = useState(false);
  
  const [times, setTimes] = useState([
    { id:1 ,dayOfWeek: 'monday', startTime: '12:71',endTime :'12:00', room: '56.81',year: '3rd' , trEmail: 'nawlay@ucsm.edu.mm' },
    { id:2 ,dayOfWeek: 'tuesday', startTime: '68:81',endTime :'12:00', room: '68.52',year: '3rd' , trEmail: 'nawlay@ucsm.edu.mm' },
    { id:3 ,dayOfWeek: 'wednesday', startTime: '68:64',endTime :'12:00', room: '68.74',year: '3rd' , trEmail: 'nawlay@ucsm.edu.mm' },
    { id:4 ,dayOfWeek: 'friday', startTime: '68:28', endTime :'12:00',room: '68.81',year: '3rd' , trEmail: 'nawlay@ucsm.edu.mm' },
    { id:5 ,dayOfWeek: 'tuesday', startTime: '67:79', endTime :'12:00',room: '20.32',year: '3rd' , trEmail: 'nawlay@ucsm.edu.mm' },
    { id:6 ,dayOfWeek: 'tuesday', startTime: '60:08', endTime :'12:00',room: '40.44',year: '3rd' , trEmail: 'nawlay@ucsm.edu.mm' },
  ]);
  // delete row when click delete
  const handleDelete = (id) => {
    setTimes(times.filter((time) => time.id !== id));
  };
    
  // Search functionality
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    setVisibleRows(4); // Reset visible rows to show initial set after search
  };

  const handleSeeMoreClick = () => {
    setVisibleRows(prevVisibleRows =>
      prevVisibleRows >= times.length ? 4 : prevVisibleRows + 4
    );
  };

  const filteredTimes = times.filter((time) =>
    time.startTime.toLowerCase().includes(searchQuery.toLowerCase()) ||
    time.room.toLowerCase().includes(searchQuery.toLowerCase()) ||
    time.dayOfWeek.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Layout>
        <div>
            <header className="flex justify-between items-center pb-4 mb-6 border-b border-gray-300">
                <div>
                    <h3 className="text-3xl font-bold pl-2">Time/Timetable</h3>
                    <div className='flex flex-row items-center pt-1 px-2'>
                        <LuFileClock className='text-3xl mx-2'/>
                        <p className="text-xl text-center w-16 bg-slate-100 rounded-full border border-black font-medium italic transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl">
                          {filteredTimes.length}</p>
                    </div>
                </div>
                <div className="flex items-center ">
                    <input 
                      type="text" 
                      placeholder="Search times..." 
                      className="border rounded-lg px-4 py-2 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xl"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <button 
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl"
                      onClick={handleSearchClick}
                    >Search</button>
                    <Link to="/dashboard/times/addnewtime">
                      <button className="bg-green-500 text-white px-4 py-2 rounded-lg ml-4 flex items-center transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl">
                        <IoAddCircleOutline className="text-xl mr-2" />
                        Add New Timetable
                      </button>
                    </Link>
                    
                </div>
            </header>

        {/* Timetable List */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-bold mb-4">Timetable List</h3>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="pb-2 border-b-2">Day of Week</th>
                <th className="pb-2 border-b-2">Time</th>
                <th className="pb-2 border-b-2">Room</th>
                <th className="pb-2 border-b-2">Year</th>
                <th className="pb-2 border-b-2">Assigned Teacher's Email</th>
                <th className="pb-2 border-b-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTimes.slice(0, visibleRows).map((room) => (
                <tr key={room.dayOfWeek} className="rounded-3xl transition duration-100 hover:bg-gray-100">
                  <td className="py-2">{room.dayOfWeek}</td>
                  <td className="py-2">{room.startTime}</td>
                  <td className="py-2">{room.room}</td>
                  <td className="px-7 py-2 flex">
                    <Link to="/dashboard/students/editstudent">
                      <button className="pr-8 text-green-500 hover:underline flex items-center mr-4">
                        <IoPencilOutline className="text-xl mr-1" />
                        Edit
                      </button>
                    </Link>
                    <button
                      className="text-red-500 hover:underline flex items-center"
                      onClick={() => handleDelete(room.dayOfWeek)}
                    >
                      <IoTrashOutline className="text-xl mr-1" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              
              {/* <tr className="rounded-3xl transition duration-100 hover:bg-gray-100">
                <td className="py-2">Monday</td>
                <td className="py-2">09:00 AM - 10:00 AM</td>
                <td className="py-2">101</td>
                <td className="py-2">3rd year</td>
                <td className="py-2">nawlaywar@ucsm.edu.mm</td>
                <td className="py-2 flex">
                  <Link to="/dashboard/times/edittime">
                    <button className="text-green-500 hover:underline flex items-center mr-4">
                      <IoPencilOutline className="text-xl mr-1" />
                      Edit
                    </button>
                  </Link>
                  <button className="text-red-500 hover:underline flex items-center">
                    <IoTrashOutline className="text-xl mr-1" />
                    Delete
                  </button>
                </td>
              </tr> */}
              
              {/* Additional rows when click see more  */}
              {/* {showMore && (
                <>
                  <tr className="rounded-3xl transition duration-100 hover:bg-gray-100">
                <td className="py-2">Monday</td>
                <td className="py-2">09:00 AM - 10:00 AM</td>
                <td className="py-2">101</td>
                <td className="py-2">3rd year</td>
                <td className="py-2">nawlaywar@ucsm.edu.mm</td>
                <td className="py-2 flex">
                  <Link to="/dashboard/times/edittime">
                    <button className="text-green-500 hover:underline flex items-center mr-4">
                      <IoPencilOutline className="text-xl mr-1" />
                      Edit
                    </button>
                  </Link>
                  <button className="text-red-500 hover:underline flex items-center">
                    <IoTrashOutline className="text-xl mr-1" />
                    Delete
                  </button>
                </td>
              </tr>
              
                </>
              )} */}
            </tbody>
          </table>

          {/* Pagination/See More */}
          {filteredTimes.length > 4 && (
            <div className="text-center mt-4">
              <button className="text-blue-500 hover:underline" onClick={handleSeeMoreClick}>
                {visibleRows >= filteredTimes.length ? 'Show Less' : 'See More'}
              </button>
            </div>
          )}
        </div>



        {/* Optional Calendar View */}
        {/* <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-bold mb-4">Calendar View</h3> */}
          {/* Implement a calendar component */}
          
          {/* <div className="calendar-view cursor-pointer"> */}
            {/* Calendar content here */}
            {/* <table className="w-full text-center">
              <thead className='border-b border-gray-300'>
                <tr className='text-center'>
                    <th>MON</th>
                    <th>TUE</th>
                    <th>WED</th>
                    <th>THU</th>
                    <th>FRI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-xl font-light text-center rounded-3xl">
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                </tr>
                <tr className="text-xl font-light text-center rounded-3xl ">
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                </tr>
                <tr className="text-xl font-light text-center rounded-3xl ">
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                </tr>

              </tbody>
            </table>
          </div>
                </div>  */}
        </div>
    </Layout>
  )
}

export default Times
