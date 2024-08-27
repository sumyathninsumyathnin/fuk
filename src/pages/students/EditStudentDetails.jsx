import React,{useState} from 'react'
import Layout from '../../components/Layout'
import { IoSchoolOutline , IoKeyOutline} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { FaRegAddressCard } from "react-icons/fa6";

const EditStudentDetails = () => {
    const navigate = useNavigate();

    
    const [mkpt, setMkpt] = useState("student.email");
    const [year, setYear] = useState("3rd");
    const [password, setPassword] = useState("student.password");
    const [photo, setPhoto] = useState("");


    const handleSave = () => {
    // Logic to save the updated details
    // After saving, redirect back to the teacher details page
        navigate('/students'); // Use navigate instead of history.push
    };

    const handleCancel = () => {
        navigate(-1); // Go back to the previous page using navigate(-1)
    };
    return (
    <Layout>
        <div>
            <div className="bg-white p-6 rounded-lg shadow-md w-4/6 mx-auto mt-10">

                <h2 className="text-3xl font-bold mb-6 text-gray-700">Edit Student Details</h2>

                {/* Form for Editing student Details */}
                <div className="space-y-4">
                    <div className="flex items-center">
                        <FaRegAddressCard className="text-2xl text-gray-400 mt-8 mr-4" />
                        <div className="w-full">
                            <label className="text-gray-500">MKPT</label>
                            <input type="text" className="w-full  mt-2 p-2 border rounded-lg" value={mkpt} onChange={(e) => setMkpt(e.target.value)}/>
                        </div>
                    </div>

                    <div className="flex items-center">
                    <IoSchoolOutline className="text-2xl text-gray-400 mt-8 mr-4" />
                    <div className="w-full">
                        <label className="text-gray-500">Year</label>
                        <input 
                        type="text" 
                        className="w-full mt-2 p-2 border rounded-lg" 
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        />
                    </div>
                    </div>

                    {/* password */}
                    <div className="flex items-center">
                    <IoKeyOutline className="text-2xl text-gray-400 mt-8 mr-4" />
                    <div className="w-full">
                        <label className="text-gray-500">Password</label>
                        <input 
                        type="text" 
                        className="w-full mt-2 p-2 border rounded-lg" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>c
                    </div>

                    {/* Photo Upload Field */}
                    <div className="mb-4">
                        <label htmlFor="photo" className="block text-gray-700 font-medium mb-2">Change Photo</label>
                        <input 
                            type="file" 
                            id="photo"
                            accept="images/*"
                            className="w-full p-2 border border-gray-300 rounded-lg" 
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)} 
                            
                        />
                        </div>
                </div>

                {/* Save and Cancel Buttons */}
                <div className="mt-6 flex justify-end space-x-4">
                    <button 
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-100"
                    onClick={handleCancel}
                    >
                    Cancel
                    </button>
                    <button 
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-100"
                    onClick={handleSave}
                    >
                    Save Changes
                    </button>
                </div>
                </div>
        </div>
    </Layout>
    )
}

export default EditStudentDetails
