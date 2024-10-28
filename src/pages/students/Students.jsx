import React , {useState} from 'react'
import Layout from '../../components/Layout'
import { PiStudent } from "react-icons/pi";
import { BiSearchAlt } from 'react-icons/bi';
import { IoAddCircleOutline, IoEyeOutline, IoPencilOutline, IoTrashOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Students = () => {

  // search 
  const [searchQuery, setSearchQuery] = useState('');
  // handle row initially show 4 rows
  const [visibleRows, setVisibleRows] = useState(4);
  // see more 
  // const [showMore, setShowMore] = useState(false);
  
  const [students, setStudents] = useState([
    { id: 1, mkpt: '6871', year: '3rd', status: 'Active' },
    { id: 2, mkpt: '6881', year: '3rd', status: 'Active' },
    { id: 3, mkpt: '6864', year: '3rd', status: 'Active' },
    { id: 4, mkpt: '6828', year: '2nd', status: 'Active' },
    { id: 5, mkpt: '6779', year: '4th', status: 'Active' },
    { id: 6, mkpt: '6008', year: '1st', status: 'Active' },
  ]);
  // delete row when click delete
  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
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
      prevVisibleRows >= students.length ? 4 : prevVisibleRows + 4
    );
  };

  const filteredStudents = students.filter((student) =>
    student.mkpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.year.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
        <div>
           <header className="flex justify-between items-center pb-4 mb-6 border-b border-gray-300">
                <div>
                    <h3 className="text-3xl font-bold pl-2">Student</h3>
                    <div className='flex flex-row items-center pt-1 px-2'>
                        <PiStudent className='text-3xl mx-2'/>
                        <p className="text-xl text-center w-16 bg-slate-100 rounded-full border border-black font-medium italic transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl">
                          {filteredStudents.length}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <input 
                      type="text" 
                      placeholder="Search students..." 
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
                    <Link to="/dashboard/students/addnewstudent">
                      <button className="bg-green-500 text-white px-4 py-2 rounded-lg ml-4 flex items-center transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl">
                        <IoAddCircleOutline className="text-xl mr-2" />
                        Add New Student
                      </button>
                    </Link>
                    
                </div>
            </header>

        <div className="bg-white p-6 rounded-lg shadow-2xl mb-6">
          <h3 className="text-2xl font-bold mb-4">Student List</h3>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="pb-2 border-b-2">MKPT</th>
                <th className="pb-2 border-b-2">Year</th>
                {/* <th className="pb-2 border-b-2">Status</th> */}
                <th className="px-7 pb-2 border-b-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.slice(0, visibleRows).map((student) => (
                <tr key={student.id} className="rounded-3xl transition duration-100 hover:bg-gray-100">
                  <td className="py-2">{student.mkpt}</td>
                  <td className="py-2">{student.year}</td>
                  {/* <td className="py-2">{student.status}</td> */}
                  <td className="px-7 py-2 flex">
                    <Link to="/dashboard/students/studentdetails">
                      <button className="pr-8 text-blue-500 hover:underline flex items-center mr-4">
                        <IoEyeOutline className="text-xl mr-1" />
                        View
                      </button>
                    </Link>
                    <Link to="/dashboard/students/editstudent">
                      <button className="pr-8 text-green-500 hover:underline flex items-center mr-4">
                        <IoPencilOutline className="text-xl mr-1" />
                        Edit
                      </button>
                    </Link>
                    <button
                      className="text-red-500 hover:underline flex items-center"
                      onClick={() => handleDelete(student.id)}
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
          {filteredStudents.length > 4 && (
            <div className="text-center mt-4">
              <button className="text-blue-500 hover:underline" onClick={handleSeeMoreClick}>
                {visibleRows >= filteredStudents.length ? 'Show Less' : 'See More'}
              </button>
            </div>
          )}
        </div>
        </div>
    </Layout>
  )
}

export default Students
