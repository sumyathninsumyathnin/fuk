import React from 'react'
import { GrUserSettings } from 'react-icons/gr';
import { MdFaceRetouchingNatural } from "react-icons/md";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <div className='bg-purple-950 w-full h-16 flex justify-between items-center '>
            <li className=' text-white my-4 mx-8 rounded-lg flex  justify-start items-center w-1/4 h-3/4'>
                <MdFaceRetouchingNatural className='text-4xl'/>
                <div className='text-white px-2'>
                    <p className='text-xl font-bold'> Facio</p>
                     <p className='text-sm font-thin italic'> face recognition attendance system</p>
                </div>
            </li>
            <Link to="/profile">
                <li className='text-white my-4 mx-3 pl-2 w-1/8 h-11 rounded-lg flex  justify-between items-center  transition duration-100 hover:bg-gray-500'>
                    <GrUserSettings className='text-2xl' />
                    <p className="text-2xl text-center pl-3 pr-5 py-5 rounded-lg font-bold ">Profile</p>
                </li>
            </Link>
            
        </div>
    </div>
  )
}

export default NavBar
