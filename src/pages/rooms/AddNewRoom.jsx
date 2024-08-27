import React ,{useState} from 'react'
import Layout from '../../components/Layout'
import { IoAddCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const AddNewRoom = () => {
    const [roomNo, setRoomNo] = useState('');
    const [longtitude, setLongtitude] = useState('');
    const [latitude, setLatitude] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission, e.g., sending data to the server
        console.log({ roomNo: roomNo,longtitude, latitude});
    };

    return (
        <Layout>
            <div>
                <div className="bg-white p-6 rounded-lg shadow-md w-4/6 mx-auto mt-10">
                <h2 className="text-3xl font-bold mb-6 text-gray-700">Add New Room</h2>
                
                <form onSubmit={handleSubmit}>
                    {/* Room Name Field */}
                    <div className="mb-4">
                    <label htmlFor="roomNo" className="block text-gray-700 font-medium mb-2">Room No.</label>
                    <input 
                        type="text" 
                        id="roomNo" 
                        value={roomNo} 
                        onChange={(e) => setRoomNo(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded-lg" 
                        placeholder="Enter room number" 
                        required 
                    />
                    </div>

                    {/* Latitude Field */}
                    <div className="mb-4">
                    <label htmlFor="latitude" className="block text-gray-700 font-medium mb-2">Latitude</label>
                    <input 
                        type="text" 
                        id="latitude" 
                        value={latitude} 
                        onChange={(e) => setLatitude(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded-lg" 
                        placeholder="Enter latitude coordinates" 
                        required 
                    />
                    </div>

                    {/* Longtitude Field */}
                    <div className="mb-4">
                    <label htmlFor="longtitude" className="block text-gray-700 font-medium mb-2">Longtitude</label>
                    <input 
                        type="text" 
                        id="longtitude" 
                        value={longtitude} 
                        onChange={(e) => setLongtitude(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded-lg" 
                        placeholder="Enter longtitude coordinates" 
                        required 
                    />
                    </div>

                    {/* Submit & cancel Button */}
                    <div className='flex justify-between'>
                        <button 
                    type="submit" 
                    className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center transition duration-100 hover:bg-green-600"
                    >
                    <IoAddCircleOutline className="text-xl mr-2" />
                    Add Room
                    </button>
                    <Link to="/dashboard/rooms">
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

export default AddNewRoom
