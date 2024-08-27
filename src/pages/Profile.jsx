import React , { useState } from 'react'
import Layout from '../components/Layout'
import { FaUserCircle, FaEdit, FaLock, FaEnvelope, FaPhone ,FaSave } from 'react-icons/fa';
import {  TbEyeClosed } from "react-icons/tb";
import { FaEye } from "react-icons/fa";

const Profile = () => {

  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword,setIsChangingPassword] = useState(false);
  const [email, setEmail] = useState('smh465594@gmail.com');
  const [phone, setPhone] = useState('09400554476');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showComfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showComfirmPassword);
  };

  const handleSave = () => {
    // Logic to save the updated details, e.g., sending them to a server
    setIsEditing(false); // Exit editing mode after saving
  };

  const handleSavePassword = () =>{
    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match.');
      return;
    }
    // If valid, proceed with saving the new password
    setIsChangingPassword(false);
  }
  
  return (
    <Layout>
      <div>
        <div className=" shadow-lg rounded-lg mt-3 p-6">
          {/* header */}
        <div className="flex items-center mb-6 cursor-pointer">
          <FaUserCircle className="text-6xl text-gray-400 mr-4" />
          <div>
            <h2 className="text-3xl font-bold text-gray-700">Ma Su Myat Hnin</h2>
            <p className="text-gray-500">smh465594@gmail.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Details */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Personal Details</h3>
            
            {isEditing ? (
              <div className="space-y-4">
                {/* Email Field */}
                <div className="flex items-center">
                  <FaEnvelope className="text-xl text-gray-400 mr-4" />
                  <div>
                    <label htmlFor="email" className="text-gray-500 block">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 p-2 border rounded-lg w-full"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="flex items-center">
                  <FaPhone className="text-xl text-gray-400 mr-4" />
                  <div>
                    <label htmlFor="phone" className="text-gray-500 block">Phone</label>
                    <input 
                      type="text" 
                      id="phone" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-1 p-2 border rounded-lg w-full"
                    />
                  </div>
                </div>

                {/* Save Button */}
                <button 
                  onClick={handleSave} 
                  className="mt-4 ml-14 bg-green-500 text-white py-2 px-4  rounded-lg hover:bg-green-600 flex items-center"
                >
                  <FaSave className="mr-2" /> Save Changes
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-xl text-gray-400 mr-4" />
                  <div>
                    <p className="text-gray-500">Email</p>
                    <p className="font-medium text-gray-700">{email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-xl text-gray-400 mr-4" />
                  <div>
                    <p className="text-gray-500">Phone</p>
                    <p className="font-medium text-gray-700">{phone}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsEditing(true)} 
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center"
                >
                  <FaEdit className="mr-2" /> Edit Personal Details
                </button>
              </div>
            )} 
            
          </div>

          {/* Password|| Security Settings */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Security Settings</h3>
            
            {isChangingPassword ? (
              <div className="space-y-4">
                {/* Current Password Field */}
                <div className="flex items-center">
                  <FaLock className="text-xl text-gray-400 mr-4 mt-6" />
                  <div className="w-full">
                    <label htmlFor="currentPassword" className="text-gray-500 block">Current Password</label>
                    <input 
                      type="password" 
                      id="currentPassword" 
                      value={currentPassword} 
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="mt-1 p-2 border rounded-lg w-full"
                    />
                  </div>
                </div>

                {/* New Password Field */}
                <div className="flex items-center">
                  <FaLock className="text-xl text-gray-400 mr-4 mt-6" />
                  <div className="w-full">
                    <label htmlFor="newPassword" className="text-gray-500 block">New Password</label>
                    
                    <div className='relative w-full flex justify-center items-center'>
                      <input 
                        type={showNewPassword ? "text" : "password"} 
                        id="newPassword" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="mt-1 p-2 border rounded-lg w-full"
                      />
                      <span className=" pt-1 absolute inset-y-0 right-4 flex justify-center items-center" onClick={toggleNewPasswordVisibility}>
                        {
                          showNewPassword ? <FaEye className='text-2xl text-center rounded-sm transition duration-100 hover:bg-gray-400'/> :
                              <TbEyeClosed className='text-2xl text-center rounded-sm transition duration-100 hover:bg-gray-400'/>
                        }
                      </span>
                    </div>

                  </div>
                </div>

                {/* Confirm Password Field */}
                <div className=" flex items-center">
                  <FaLock className="text-xl text-gray-400 mr-4 mt-6" />
                  <div className="w-full">
                    <label htmlFor="confirmPassword" className="text-gray-500 block">Confirm New Password</label>
                    
                    <div className='relative w-full flex justify-center items-center'>
                      <input 
                        type= {showComfirmPassword ? "text" :"password"}
                        id="confirmPassword" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="mt-1 p-2 border rounded-lg w-full"
                      />
                      <span className=" pt-1 absolute inset-y-0 right-4 flex justify-center items-center" onClick={toggleConfirmPasswordVisibility} >
                        {
                            showComfirmPassword ? <FaEye className='text-2xl text-center rounded-sm transition duration-100 hover:bg-gray-400'/> :
                               <TbEyeClosed className='text-2xl text-center rounded-sm transition duration-100 hover:bg-gray-400'/>
                        }                      
                      </span>
                    </div>

                  </div>
                </div>

                {/* Save Password Button */}
                <button 
                  onClick={handleSavePassword} 
                  className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 flex items-center"
                >
                  <FaSave className="mr-2" /> Save Password
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaLock className="text-xl text-gray-400 mr-4" />
                  <div>
                    <p className="text-gray-500">Password</p>
                    <p className="font-medium text-gray-700">********</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsChangingPassword(true)} 
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 flex items-center"
                >
                  <FaEdit className="mr-2" /> Change Password
                </button>
              </div>
            )}

          </div>

        </div>

        {/* Activity Log */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Recent Activity</h3>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span className="text-gray-500">Logged in from IP 192.168.1.1</span>
              <span className="text-gray-400">2024-08-22 09:00 AM</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-500">Updated security settings</span>
              <span className="text-gray-400">2024-08-21 03:15 PM</span>
            </li>
            {/* Additional activity logs */}
          </ul>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default Profile
