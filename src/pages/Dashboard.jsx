import React from 'react'
import Layout from '../components/Layout'

const dashboard = () => {
  return (
    <Layout>
      <div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md transition duration-100 hover:bg-gray-500 hover:text-white">
            <h3 className="text-xl font-bold">Total Teacher</h3>
            <p className="text-3xl mt-2">150</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md transition duration-100 hover:bg-gray-500 hover:text-white">
            <h3 className="text-xl font-bold">Total Student</h3>
            <p className="text-3xl mt-2">258</p>
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
              <tr className='rounded-3xl transition duration-100 hover:bg-gray-300 '>
                <td className="py-2">nawlaywar@ucsm.edu.mm</td>
                <td className="py-2">Present</td>
                <td className="py-2">09:00 AM</td>
                <td className="py-2">
                  <button className="text-blue-500 hover:underline">View</button>
                </td>
              </tr>
              <tr className='rounded-3xl transition duration-100 hover:bg-gray-300'>
                <td className="py-2">yiyihlaing@ucsm.edu.mm</td>
                <td className="py-2">Present</td>
                <td className="py-2">09:00 AM</td>
                <td className="py-2">
                  <button className="text-blue-500 hover:underline">View</button>
                </td>
              </tr>
              {/* Additional rows as needed */}
            </tbody>
          </table>
          <div className="text-center mt-1">
            <button className="text-blue-500 hover:underline">See More</button>
          </div>
        </div>

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
              <tr className='rounded-3xl transition duration-100 hover:bg-gray-300'>
                <td className="py-2">6871</td>
                <td className="py-2">Present</td>
                <td className="py-2">09:00 AM</td>
                <td className="py-2">
                  <button className="text-blue-500 hover:underline">View</button>
                </td>
              </tr>
              <tr className='rounded-3xl transition duration-100 hover:bg-gray-300'>
                <td className="py-2">6864</td>
                <td className="py-2">Present</td>
                <td className="py-2">09:00 AM</td>
                <td className="py-2">
                  <button className="text-blue-500 hover:underline">View</button>
                </td>
              </tr>
              {/* Additional rows as needed */}
            </tbody>
          </table>
          <div className="text-center mt-1">
            <button className="text-blue-500 hover:underline">See More</button>
          </div>
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

export default dashboard

