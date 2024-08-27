import React ,{useState} from 'react'
import Layout from '../../components/Layout'
import { IoAddCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const AddNewStudent = () => {
    
    const [mkpt, setMkpt] = useState('');
    const [year, setYear] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    // Logic to handle form submission, e.g., sending data to the server
        console.log({ mkpt: mkpt,year: year,  password: password, photo });
    };

    return (
        <Layout>
            <div>
                <div className="bg-white p-6 rounded-lg shadow-md w-4/6 mx-auto mt-10">
                <h2 className="text-3xl font-bold mb-6 text-gray-700">Add New Student</h2>
                
                <form onSubmit={handleSubmit}>

                    {/* mkpt Field */}
                    <div className="mb-4">
                    <label htmlFor="mkpt" className="block text-gray-700 font-medium mb-2">MKPT</label>
                    <input 
                        type="text" 
                        id="mkpt" 
                        value={mkpt} 
                        onChange={(e) => setMkpt(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded-lg" 
                        placeholder="Enter student's mkpt" 
                        required 
                    />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                    <input 
                        type="text" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded-lg" 
                        placeholder="Enter student's password" 
                        required 
                    />
                    </div>

                    {/* Student Year Field */}
                    <div className="mb-4">
                    <label htmlFor="year" className="block text-gray-700 font-medium mb-2">Year</label>
                    <select 
                        id="year" 
                        value={year} 
                        onChange={(e) => setYear(e.target.value)} 
                        className="w-full h-8 p-2 border border-gray-300 rounded-lg" 
                        required
                    >
                        <option value="" disabled>Select Year</option>
                        <option value="1st">1st year</option>
                        <option value="2nd">2nd year</option>
                        <option value="3rd">3rd year</option>
                        <option value="4th">4th year</option>
                        <option value="5th">5th year</option>
                    </select>
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
                        <button 
                        type="submit" 
                        className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center transition duration-100 hover:bg-green-600"
                        >
                            <IoAddCircleOutline className="text-xl mr-2" />
                            Add Student
                        </button>
                        <Link to="/dashboard/students">
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

export default AddNewStudent
