import React ,{useState} from 'react'
import Layout from '../components/Layout'
import { IoTrashOutline, IoEyeOutline, IoCheckmarkDoneOutline } from 'react-icons/io5';
import { MdOutlineNotificationsActive } from "react-icons/md";


const Notifications = () => {

  // handle row initially show 4 rows
  const [visibleRows, setVisibleRows] = useState(4);

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Teacher Attendance Recorded', time: '2024-08-22 09:15 AM', email: 'nangnandartun@ucsm.edu.mm', isRead: false },
    { id: 2, title: 'New Teacher Attendance Recorded', time: '2024-08-22 09:15 AM', email: 'yuyuwin@ucsm.edu.mm', isRead: false },
    { id: 3, title: 'New Teacher Attendance Recorded', time: '2024-08-22 09:15 AM', email: 'yuyuwin@ucsm.edu.mm', isRead: false },
    { id: 4, title: 'New Teacher Attendance Recorded', time: '2024-08-22 09:15 AM', email: 'yuyuwin@ucsm.edu.mm', isRead: false },
    { id: 5, title: 'New Teacher Attendance Recorded', time: '2024-08-22 09:15 AM', email: 'yuyuwin@ucsm.edu.mm', isRead: false },
    { id: 6, title: 'New Teacher Attendance Recorded', time: '2024-08-22 09:15 AM', email: 'yuyuwin@ucsm.edu.mm', isRead: false },

  ]);

  // see more 
  const [loadMore, setLoadMore] = useState(false);

  const handleLoadMoreClick = () => {
      if (visibleRows >= notifications.length) {
      setVisibleRows(4); // Reset to initial state
    } else {
      setVisibleRows(prevVisibleRows => prevVisibleRows + 4); // Load more rows
    }
    // Toggle showMore state
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, isRead: true })));
  };

  // Mark individual notification as read
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  // delete
  const handleDelete = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };
  // delete all
  const handleDeleteAll =() => {
    setNotifications([]);
  };

  return (
    <Layout>
        <div>
          <header className="flex justify-between items-center pb-4 mb-6 border-b border-gray-300">
          <div>
            <h3 className="text-3xl font-bold pl-2">Notifications</h3>
            <div className='flex flex-row items-center pt-1 px-2'>
              <MdOutlineNotificationsActive className='text-3xl mx-2' />
              <p className="text-xl text-center w-12 bg-slate-100 rounded-full border border-black font-medium italic transition duration-100 hover:bg-gray-500 hover:text-white shadow-2xl">
                {notifications.filter(notification => !notification.isRead).length}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-4 flex items-center" onClick={markAllAsRead}>
              <IoCheckmarkDoneOutline className="text-xl mr-2" />
              Mark All as Read
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center"
              onClick={handleDeleteAll}>
              <IoTrashOutline className="text-xl mr-2" />
              Delete All
            </button>
          </div>
        </header>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-bold mb-4">Recent Notifications</h3>
          <ul>
            {notifications
          .sort((a, b) => (a.isRead === b.isRead ? 0 : a.isRead ? 1 : -1))
          .slice(0, visibleRows)
          .map((notification) => (
            <li
              key={notification.id}
              className={`py-2 flex justify-between items-center transition duration-100 hover:bg-gray-100 ${
                notification.isRead ? 'text-gray-500' : ''
              }`}
            >
              <div className="flex items-center">
                <div>
                  <h4
                    className={`text-lg font-semibold ${
                      notification.isRead ? 'text-gray-400' : ''
                    }`}
                  >
                    {notification.title}
                  </h4>
                  <p
                    className={`text-sm ${
                      notification.isRead ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {notification.time} - {notification.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                {!notification.isRead && (
                  <button
                    className="text-green-500 hover:underline flex items-center mr-4"
                    onClick={() => markAsRead(notification.id)}
                  >
                    <IoCheckmarkDoneOutline className="text-xl mr-1" />
                    Mark as Read
                  </button>
                )}
                {/* <button className="text-blue-500 hover:underline flex items-center mr-4">
                  <IoEyeOutline className="text-xl mr-1" />
                  View Details
                </button> */}
                <button 
                  className="text-red-500 hover:underline flex items-center"
                  onClick={() => handleDelete(notification.id)}
                >
                  <IoTrashOutline className="text-xl mr-1" />
                  Delete
                </button>
              </div>
            </li>
          ))}
          </ul>

          {/* Pagination/Load More */}
          {notifications.length> 4 && (
            <div className="text-center mt-4">
            <button className="text-blue-500 hover:underline" onClick={handleLoadMoreClick}>
              {visibleRows >= notifications.length? 'Show Less' :'Load More'}
            </button>
          </div>
          )}

        </div>
      </div>   
    </Layout>
  )
}

export default Notifications
