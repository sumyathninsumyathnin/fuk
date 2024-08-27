import React,{useState} from 'react'
import Layout from '../components/Layout'

const Dashboard = () => {

  const [visibleRows, setVisibleRows] = useState(2);

  const handleTeacherSeeMoreClick = () => {
    setVisibleRows(visibleRows >= dataOfTeachers.length ? 2 : visibleRows + 2); // Toggle between showing more or less rows
  };

  const handleStudentSeeMoreClick = () => {
    setVisibleRows(visibleRows >= dataOfStudents.length ? 2 : visibleRows + 2); // Toggle between showing more or less rows
  };

  const dataOfTeachers = [
    {
      email: "nawlaywar@ucsm.edu.mm",
      status: "Present",
      checkInTime: "09:00 AM",
      additionalInfo: "Department: Computer Science, Location: Room 201",
    },
    {
      email: "myokhaing@ucsm.edu.mm",
      status: "Present",
      checkInTime: "09:30 AM",
      additionalInfo: "Department: Computer Engineering, Location: Room 104",
    },
    {
      email: "yuyuwin@ucsm.edu.mm",
      status: "Present",
      checkInTime: "09:00 AM",
      additionalInfo: "Department: Computer Science, Location: Room 102",
    },
    {
      email: "yiyihliang@ucsm.edu.mm",
      status: "Present",
      checkInTime: "09:05 AM",
      additionalInfo: "Department: Computer Science, Location: Room 101",
    },
    
  ];

  
  const [expandedRow, setExpandedRow] = useState(null); // State to track expanded row
  
  const handleViewClickTeacher = (email) => {
    setExpandedRow(expandedRow === email ? null : email); // Toggle the expanded state
  };

  const dataOfStudents = [
    {
      mkpt: "6871",
      status: "Present",
      checkInTime: "09:40 AM",
      additionalInfo: "Year: 3rd , Location: Room 201",
    },
    {
      mkpt: "6864",
      status: "Present",
      checkInTime: "10:40 AM",
      additionalInfo: "Year: 3rd , Location: Room 301",
    },
    {
      mkpt: "6800",
      status: "Present",
      checkInTime: "09:00 AM",
      additionalInfo: "Year: 3rd , Location: Room 271",
    },
  ];

  const handleViewClickStudent = (mkpt) => {
    setExpandedRow(expandedRow === mkpt ? null : mkpt); // Toggle the expanded state
  };


  return (
    <Layout>
      <div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md transition duration-100 hover:bg-gray-500 hover:text-white">
            <h3 className="text-xl font-bold">Total Teacher</h3>
            <p className="text-3xl mt-2">{dataOfTeachers.length}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md transition duration-100 hover:bg-gray-500 hover:text-white">
            <h3 className="text-xl font-bold">Total Student</h3>
            <p className="text-3xl mt-2">{dataOfStudents.length}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md transition duration-100 hover:bg-gray-500 hover:text-white">
            <h3 className="text-xl font-bold">Today's Attendance</h3>
            <p className="text-3xl mt-2">85%</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md transition duration-100 hover:bg-gray-500 hover:text-white">
            <h3 className="text-xl font-bold">Recent Absences</h3>
            <p className="text-3xl mt-2">10</p>
          </div>
        </div>
        
        {/* attendance summary */}
        <div className='bg-slate-200'>
        <div className="bg-white p-6 rounded-lg shadow-md mb-2">
          <h3 className="text-2xl font-bold mb-4">Today's Attendance Summary</h3>

          {/* for teacher */}
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="pb-2 border-b-2">Teacher's Email</th>
                <th className="pb-2 border-b-2">Status</th>
                <th className="pb-2 border-b-2">Check-In Time</th>
                <th className="pb-2 border-b-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {dataOfTeachers.slice(0, visibleRows).map((row, index) => (
                <React.Fragment key={index}>
                  <tr className="rounded-3xl transition duration-100 hover:bg-gray-300">
                    <td className="py-2">{row.email}</td>
                    <td className="py-2">{row.status}</td>
                    <td className="py-2">{row.checkInTime}</td>
                    <td className="py-2">
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => handleViewClickTeacher(row.email)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                  {expandedRow === row.email && (
                    <tr className="bg-gray-100">
                      <td colSpan="4" className="py-4">
                        <p><strong>Additional Info:</strong> {row.additionalInfo}</p>
                        {/* Add more detailed information here */}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          {dataOfTeachers.length > 2 && (
          <div className="text-center mt-1">
            <button className="text-blue-500 hover:underline"
              onClick={handleTeacherSeeMoreClick}>
              {visibleRows >= dataOfTeachers.length ? 'See Less' : 'See More'}
            </button>
          </div>
          )}
        </div>
        
        {/* for students */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="pb-2 border-b-2">MKPT</th>
                <th className="pb-2 border-b-2">Status</th>
                <th className="pb-2 border-b-2">Check-In Time</th>
                <th className="pb-2 border-b-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {dataOfStudents.slice(0, visibleRows).map((row, index) => (
                <React.Fragment key={index}>
                <tr className="rounded-3xl transition duration-100 hover:bg-gray-300">
                  <td className="py-2">{row.mkpt}</td>
                  <td className="py-2">{row.status}</td>
                  <td className="py-2">{row.checkInTime}</td>
                  <td className="py-2">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleViewClickStudent(row.mkpt)}
                    >
                      View
                    </button>
                    </td>
                  </tr>
                  {expandedRow === row.mkpt && (
                    <tr className="bg-gray-100">
                      <td colSpan="4" className="py-4">
                        <p><strong>Additional Info:</strong> {row.additionalInfo}</p>
                        {/* Add more detailed information here */}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          {dataOfStudents.length > 2 && (
              <div className="text-center mt-1">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={handleStudentSeeMoreClick}
                >
                  {visibleRows >= dataOfStudents.length ? 'See Less' : 'See More'}
                </button>
              </div>
            )}
        </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Recent Activity</h3>
          <ul>
            <li className="mb-2 transition duration-100 hover:bg-gray-300" >MKPT-6881 checked in at 09:00 AM</li>
            <li className="mb-2 transition duration-100 hover:bg-gray-300">yuyuwin@ucsm.edu.mm was marked absent</li>
            {/* Additional activity logs */}
          </ul>
          <div className="text-center mt-1">
            <button className="text-blue-500 hover:underline">See More</button>
          </div>
        </div>
    </div>
    </Layout>
  )
}

export default Dashboard