import React ,{useState} from 'react'
import Layout from '../../components/Layout'
import { IoSaveOutline} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const EditRoomDetails = ({room}) => {

    const [roomNo, setRoomNo] = useState('room.no');
    const [latitude, setLatitude] = useState('room.latitude');
    const [longitude, setLongitude] = useState('room.longitude');
    const navigate = useNavigate();

    // const handleSave = () => {
    //     const updatedRoom = {
    //     ...room,
    //     name,
    //     location,
    //     latitude,
    //     longitude,
    //     capacity,
    //     timetable,
    //     };
    //     onSave(updatedRoom);
    // };

    const handleSave = () => {
        // Logic to save the updated room details
        // After saving, redirect back to the room details page
        navigate('/dashboard/rooms');
    };

    const handleCancel = () => {
        navigate('/dashboard/rooms'); // Go back to the previous page using navigate(-1)
    };

    return (
    <Layout>
        <div>
            <div className="bg-white p-6 rounded-lg shadow-md w-4/6 mx-auto mt-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-700">Edit Room Details</h2>
            </div>
            <form>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Room No.</label>
                <input
                    type="text"
                    value={roomNo}
                    onChange={(e) => setRoomNo(e.target.value)}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Latitude</label>
                <input
                    type="text"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Longitude</label>
                <input
                    type="text"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                />
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-100" onClick={handleCancel}>
                    Cancel
                    </button>
                    <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl">
                        <IoSaveOutline className="text-xl mr-2" />
                        Save Changes
                    </button>
                    
                    
                </div>
            </form>
            </div>
        </div>
        </Layout>
    )
}

export default EditRoomDetails
