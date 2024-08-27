import React , {useState}from 'react'
import Layout from '../../components/Layout'
import { IoAddCircleOutline, IoEyeOutline, IoPencilOutline, IoTrashOutline } from 'react-icons/io5';
import { BiSearchAlt } from 'react-icons/bi';
import { GiTeacher } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Teachers = () => {

  // search 
  const [searchQuery, setSearchQuery] = useState('');
  // handle row initially show 4 rows
  const [visibleRows, setVisibleRows] = useState(4);
  // see more 
  // const [showMore, setShowMore] = useState(false);
  
  const [teachers, setTeachers] = useState([
    { id: 1, email: 'nawlaywar@ucsm.edu.mm', department: 'IC', status: 'Active' },
    { id: 2, email: 'yuyuwin@ucsm.edu.mm', department: 'FCS', status: 'Active' },
    { id: 3, email: 'yiyihlaing@ucsm.edu.mm', department: 'IT', status: 'Active' },
    { id: 4, email: 'naw1@ucsm.edu.mm', department: 'FCS', status: 'Active' },
    { id: 5, email: 'naw2@ucsm.edu.mm', department: 'SE', status: 'Active' },
    { id: 6, email: 'naw3@ucsm.edu.mm', department: 'Math', status: 'Active' },
    { id: 7, email: 'naw4@ucsm.edu.mm', department: 'FCS', status: 'Active' },
  ]);
  // delete row when click delete
  const handleDelete = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
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
      prevVisibleRows >= teachers.length ? 4 : prevVisibleRows + 4
    );
  };

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    teacher.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    teacher.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
        <div>
            <header className="flex justify-between items-center pb-4 mb-6 border-b border-gray-300">
          <div>
            <h3 className="text-3xl font-bold pl-2">Teacher</h3>
            <div className='flex flex-row items-center pt-1 px-2'>
              <GiTeacher className='text-3xl mx-2'/>
              <p className="text-xl text-center w-16 bg-slate-100 rounded-full border border-black font-medium italic transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl">
                {filteredTeachers.length}</p>
            </div>
          </div>
          <div className="flex items-center">
            <input 
              type="text" 
              placeholder="Search teachers..." 
              className="border rounded-lg px-4 py-2 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xl"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl"
              onClick={handleSearchClick}
            >
              <BiSearchAlt className="text-xl mr-2" />
              Search
            </button>

            <Link to="/dashboard/teachers/addnewteacher">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg ml-4 flex items-center transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl">
                <IoAddCircleOutline className="text-xl mr-2" />
                Add New Teacher
              </button>
            </Link>
          </div>
        </header>

        <div className="bg-white p-6 rounded-lg shadow-2xl mb-6">
          <h3 className="text-2xl font-bold mb-4">Teacher List</h3>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="pb-2 border-b-2">Teacher's Gmail</th>
                <th className="pb-2 border-b-2">Department</th>
                <th className="pb-2 border-b-2">Status</th>
                <th className=" pb-2 border-b-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.slice(0, visibleRows).map((teacher) => (
                <tr key={teacher.id} className="rounded-3xl transition duration-100 hover:bg-gray-100">
                  <td className="py-2">{teacher.email}</td>
                  <td className="py-2">{teacher.department}</td>
                  <td className="py-2">{teacher.status}</td>
                  <td className=" py-2 flex">
                    <Link to="/dashboard/teachers/teacherdetails">
                      <button className="pr-8 text-blue-500 hover:underline flex items-center mr-4">
                        <IoEyeOutline className="text-xl mr-1" />
                        View
                      </button>
                    </Link>
                    <Link to="/dashboard/teachers/editteacher">
                      <button className="pr-8 text-green-500 hover:underline flex items-center mr-4">
                        <IoPencilOutline className="text-xl mr-1" />
                        Edit
                      </button>
                    </Link>
                    <button
                      className="text-red-500 hover:underline flex items-center"
                      onClick={() => handleDelete(teacher.id)}
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
          {filteredTeachers.length > 4 && (
            <div className="text-center mt-4">
              <button className="text-blue-500 hover:underline" onClick={handleSeeMoreClick}>
                {visibleRows >= filteredTeachers.length ? 'Show Less' : 'See More'}
              </button>
            </div>
          )}
        </div>
        </div>
    </Layout>
  )
}

export default Teachers
