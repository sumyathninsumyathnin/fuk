import React ,{useState} from 'react'
import { MdFaceRetouchingNatural } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import { TbSquareRoundedLetterF } from "react-icons/tb";
import {  TbEyeClosed } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  return (
    <div className='flex justify-between '
        style={{
        backgroundImage: `url("../../images/background.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // backgroundColor: '#94b57e',
        height: '100vh',
        // color: '#e17979',
        // width: '200vh', 
      }} 
    >
        <ul className='list-none md:w-screen flex flex-col gap-y-4'>
            <div className='bg-purple-950 w-screen h-16 flex justify-between items-center '>
                <li className=' text-white my-2 mx-8 rounded-lg flex  justify-start items-center w-1/4 h-3/4'>
                    <MdFaceRetouchingNatural className='text-4xl'/>
                    <div className='text-white px-2'>
                        <p className='text-xl font-bold'> Facio</p>
                        <p className='text-sm font-thin italic'> face recognition attendance system</p>
                    </div>
                </li>
            </div>
            <div className= 'w-full h-full flex justify-center'>
                <div className='bg-purple-200 w-96 h-4/6 my-28 shadow-xl flex flex-col items-center rounded-xl '>
                    <div className=' flex justify-between items-center'>
                        <IoIosLogIn className='text-2xl text-left mx-2'/>
                        <p className='text-3xl font-bold py-6'>Admin Login</p>
                    </div>
                    <p className='italic font-thin'>Enter your details to get log in to account!</p>
                    <div className=' py-4 my-8 flex flex-col items-center w-full'>
                        <input type='text' className=' text-gray-500 w-4/6 h-10 rounded-lg pl-4 my-2' placeholder='Enter Email' />
                        
                        {/* password form */}
                        <div className='relative w-full flex justify-center items-center'>
                            <input type= {showPassword ? 'text' : 'password'} className=' text-gray-500 w-4/6 h-10 rounded-lg pl-4 my-2' placeholder='Passcode'/>
                            <span className="absolute inset-y-0 right-20 flex items-center pl-3" onClick={togglePasswordVisibility}>
                                {showPassword ? (
                                    <FaEye className='text-xl rounded-sm transition duration-100 hover:bg-gray-400' />
                                        ) : (
                                    <TbEyeClosed className='text-xl rounded-sm transition duration-100 hover:bg-gray-400' />
                                )}                            
                            </span>   
                        </div>

                        <Link to="/dashboard" className='w-full flex justify-center'>
                            <button type='submit' className='text-center text-opacity-90 text-white bg-purple-950 w-4/6 h-10 rounded-lg my-2 transition duration-100 hover:bg-gray-500'>Log in</button>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <TbSquareRoundedLetterF className='text-3xl my-1'/>
                        <p className='text-lg font-thin'>-- FACIO --</p>
                    </div>
                </div>
            </div>
        </ul>
        

    </div>
  )
}

export default Login
