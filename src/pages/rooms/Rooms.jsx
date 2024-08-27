import React ,{useState} from 'react'
import Layout from '../../components/Layout'
import { IoAddCircleOutline, IoPencilOutline, IoTrashOutline } from 'react-icons/io5';
import { MdMeetingRoom } from "react-icons/md";
import { Link } from 'react-router-dom';

const Rooms = () => {

  // search 
  const [searchQuery, setSearchQuery] = useState('');
  // handle row initially show 4 rows
  const [visibleRows, setVisibleRows] = useState(4);
  // see more 
  // const [showMore, setShowMore] = useState(false);
  
  const [rooms, setRooms] = useState([
    { roomNo: '302', latitude: '68.71', longtitude: '56.81' },
    { roomNo: '201', latitude: '68.81', longtitude: '68.52' },
    { roomNo: '120', latitude: '68.64', longtitude: '68.74' },
    { roomNo: '463', latitude: '68.28', longtitude: '68.81' },
    { roomNo: '025', latitude: '67.79', longtitude: '20.32' },
    { roomNo: '026', latitude: '60.08', longtitude: '40.44' },
  ]);
  // delete row when click delete
  const handleDelete = (roomNo) => {
    setRooms(rooms.filter((room) => room.roomNo !== roomNo));
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
      prevVisibleRows >= rooms.length ? 4 : prevVisibleRows + 4
    );
  };

  const filteredRooms = rooms.filter((room) =>
    room.latitude.toLowerCase().includes(searchQuery.toLowerCase()) ||
    room.longtitude.toLowerCase().includes(searchQuery.toLowerCase()) ||
    room.roomNo.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Layout>
        <div>
            <header className=" flex justify-between items-center pb-4 mb-6 border-b border-gray-300">
                <div>
                    <h3 className="text-3xl font-bold pl-2">Room</h3>
                    <div className='flex flex-row items-center pt-1 px-1'>
                        <MdMeetingRoom className='text-3xl mx-1'/>
                        <p className="text-xl text-center w-14 bg-slate-100 rounded-full border border-black font-medium italic transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl">
                          {filteredRooms.length}</p>
                    </div>
                </div>
                <div className="flex items-center">
                   <input 
                      type="text" 
                      placeholder="Search rooms..." 
                      className="border rounded-lg px-4 py-2 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xl"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <button 
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl"
                      onClick={handleSearchClick}
                    >Search</button>
                    <Link to="/dashboard/rooms/addnewroom">
                      <button className="bg-green-500 text-white px-4 py-2 rounded-lg ml-4 flex items-center transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl">
                        <IoAddCircleOutline className="text-xl mr-2" />
                        Add New Room
                      </button>
                    </Link>
                </div>
            </header>

        <div className="bg-white p-6 rounded-lg shadow-2xl mb-6">
          <h3 className="text-2xl font-bold mb-4">Room List</h3>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="pb-2 border-b-2">Room No</th>
                <th className="pb-2 border-b-2">Latitudee</th>
                <th className="pb-2 border-b-2">Longtitudee</th>
                <th className="pb-2 px-7 border-b-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRooms.slice(0, visibleRows).map((room) => (
                <tr key={room.roomNo} className="rounded-3xl transition duration-100 hover:bg-gray-100">
                  <td className="py-2">{room.roomNo}</td>
                  <td className="py-2">{room.latitude}</td>
                  <td className="py-2">{room.longtitude}</td>
                  <td className="px-7 py-2 flex">
                    <Link to="/dashboard/students/editstudent">
                      <button className="pr-8 text-green-500 hover:underline flex items-center mr-4">
                        <IoPencilOutline className="text-xl mr-1" />
                        Edit
                      </button>
                    </Link>
                    <button
                      className="text-red-500 hover:underline flex items-center"
                      onClick={() => handleDelete(room.roomNo)}
                    >
                      <IoTrashOutline className="text-xl mr-1" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination/See More */}
          {filteredRooms.length > 4 && (
            <div className="text-center mt-4">
              <button className="text-blue-500 hover:underline" onClick={handleSeeMoreClick}>
                {visibleRows >= filteredRooms.length ? 'Show Less' : 'See More'}
              </button>
            </div>
          )}
        </div>
        </div>
    </Layout>
  )
}

export default Rooms
