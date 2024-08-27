import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Teachers from "./pages/teachers/Teachers";
import Students from "./pages/students/Students";
import Rooms from "./pages/rooms/Rooms";
import Times from "./pages/times/Times";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import AddNewTeacher from "./pages/teachers/AddNewTeacher";
import AddNewStudent from "./pages/students/AddNewStudent";
import AddNewTime from "./pages/times/AddNewTime";
import AddNewRoom from "./pages/rooms/AddNewRoom";
import TeacherDetails from "./pages/teachers/TeacherDetails";
import EditTeacherDetails from "./pages/teachers/EditTeacherDetails";
import StudentDetails from "./pages/students/StudentDetails";
import EditStudentDetails from "./pages/students/EditStudentDetails";
import EditRoomDetails from "./pages/rooms/EditRoomDetails";
import EditTimesDetails from "./pages/times/EditTimesDetails";

function App() {
  return (
    <Router>
      <div>
        
         

            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/dashboard/teachers" element={<Teachers/>} />
              <Route path="/dashboard/teachers/addnewteacher" element={<AddNewTeacher/>} />
              <Route path="/dashboard/teachers/teacherdetails" element={<TeacherDetails/>} />
              <Route path="/dashboard/teachers/editteacher" element={<EditTeacherDetails/>} />
              <Route path="/dashboard/students" element={<Students/>} />
              <Route path="/dashboard/students/addnewstudent" element={<AddNewStudent/>} />
              <Route path="/dashboard/students/studentdetails" element={<StudentDetails/>} />
              <Route path="/dashboard/students/editstudent" element={<EditStudentDetails/>} />
              <Route path="/dashboard/rooms" element={<Rooms/>} />
              <Route path="/dashboard/rooms/addnewroom" element={<AddNewRoom/>} />
              <Route path="/dashboard/rooms/editroom" element={<EditRoomDetails/>} />
              <Route path="/dashboard/times" element={<Times/>} />
              <Route path="/dashboard/times/addnewtime" element={<AddNewTime/>} />
              <Route path="/dashboard/times/edittime" element={<EditTimesDetails/>} />
              <Route path="/dashboard/notifications" element={<Notifications/>} />

              

            </Routes>
      </div>
    </Router>
  );
}

export default App;
