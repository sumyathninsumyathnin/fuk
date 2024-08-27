import React ,{useState} from 'react'
import { IoAddCircleOutline } from 'react-icons/io5';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';

const AddNewTeacher = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log({ email, password, photo });
    };

    return (
        <Layout>
            <div>
                <div className="bg-white p-6 rounded-lg shadow-md w-4/6 mx-auto mt-10">
                    <h2 className="text-3xl font-bold mb-6 text-gray-700">Add New Teacher</h2>
                    <form onSubmit={handleSubmit}>
                        
                        {/* Email Field */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                className="w-full p-2 border border-gray-300 rounded-lg" 
                                placeholder="Enter teacher's email" 
                                required 
                            />
                        </div>
                        
                        {/* Teacher password Field */}
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                            <input 
                                type="text" 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                className="w-full p-2 border border-gray-300 rounded-lg" 
                                placeholder="Enter teacher's password" 
                                required 
                            />
                        </div>

                        {/* Photo Upload Field */}
                        <div className="mb-4">
                        <label htmlFor="photo" className="block text-gray-700 font-medium mb-2">Upload Photo</label>
                        <input 
                            type="file" 
                            id="photo" 
                            accept="image/*" 
                            onChange={handlePhotoChange} 
                            className="w-full p-2 border border-gray-300 rounded-lg" 
                            required 
                        />
                        </div>

                        {/* Submit & cancel Button */}
                        <div className="flex justify-between items-center mt-6">
                            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center transition duration-100 hover:bg-green-600">
                                <IoAddCircleOutline className="text-xl mr-2" />
                                Add Teacher
                            </button>
                            <Link to="/dashboard/teachers">
                                <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-lg flex items-center transition duration-100 hover:bg-gray-600">
                                Cancel
                            </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default AddNewTeacher
