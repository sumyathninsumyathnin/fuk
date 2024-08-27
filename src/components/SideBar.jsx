import React from 'react'

import { IoHomeOutline } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { MdMeetingRoom } from "react-icons/md";
import { LuFileClock } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdOutlineNotificationsActive } from "react-icons/md";
import { TbSquareRoundedLetterF } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
    // alert('Are you sure to log out');
    // Example of clearing tokens or session data
    localStorage.removeItem('authToken');
    sessionStorage.clear();

    // Redirect to the login page
    navigate('/');
  };
  return (
    <div className="bg-purple-400  w-1/6 h-screen   py-4 px-4 my-2 mx-3 rounded-lg">
                    <Link to="/dashboard">
                        <li className='bg-gray-100 text-black-400 my-4 px-4 rounded-lg flex  justify-start items-center w-52 h-12 transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl cursor-pointer'>
                            <IoHomeOutline className='text-2xl'/>
                            <p className="text-lg text-right px-5 py-5 rounded-lg font-medium ">Dashboard</p>
                        </li>
                    </Link>
                    <Link to="/dashboard/teachers">
                    <li className='bg-gray-100 text-black-400 my-4 px-4 rounded-lg flex  justify-start items-center w-52 h-12 transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl cursor-pointer'>
                        <GiTeacher className='text-2xl'/>
                        <p className="text-lg text-right px-5 py-5 rounded-lg font-medium ">Teacher</p>
                    </li>
                    </Link>
                    <Link to="/dashboard/students">
                    <li className='bg-gray-100 text-black-400 my-4 px-4 rounded-lg flex  justify-start items-center w-52 h-12 transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl cursor-pointer'>
                        <PiStudent className='text-2xl'/>
                        <p className="text-lg text-right px-5 py-5 rounded-lg font-medium ">Student</p>
                    </li>
                    </Link>
                    <Link to="/dashboard/rooms">
                        <li className='bg-gray-100 text-black-400 my-4 px-4 rounded-lg flex  justify-start items-center w-52 h-12 transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl cursor-pointer'>
                        <MdMeetingRoom className='text-2xl'/>
                        <p className="text-lg text-right px-5 py-5 rounded-lg font-medium ">Room</p>
                    </li>
                    </Link>
                    <Link to="/dashboard/times">
                        <li className='bg-gray-100 text-black-400 my-4 px-4 rounded-lg flex  justify-start items-center w-52 h-12 transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl cursor-pointer'>
                        <LuFileClock className='text-2xl'/>
                        <p className="text-lg text-right px-5 py-5 rounded-lg font-medium ">Time</p>
                    </li>
                    </Link>
                    <Link to="/dashboard/notifications">
                        <li className='bg-gray-100 text-black-400 my-4 px-4 rounded-lg flex  justify-start items-center w-52 h-12 transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl cursor-pointer'>
                        <MdOutlineNotificationsActive className='text-2xl'/>
                        <p className="text-lg text-right px-5 py-5 rounded-lg font-medium ">Notifications</p>
                    </li>
                    </Link>
                    
                    <li className='bg-gray-100 text-black-400 my-4 px-4 rounded-lg flex  justify-start items-center w-52 h-12 transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl cursor-pointer' onClick={handleLogout}>
                        <MdLogout className='text-2xl'/>
                        <p className="text-lg text-right px-5 py-5 rounded-lg font-medium ">Log out</p>
                    </li>
                    
                    <li className=' my-28 flex flex-col items-center'>
                        <TbSquareRoundedLetterF className='text-4xl my-2'/>
                        <p className='text-xl font-thin'>-- FACIO --</p>
                    </li>
                    
            </div>
  )
}

export default SideBar
