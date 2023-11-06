import React, { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import SignUp from '../../pages/auth/sign-up';
import SignIn from '../../pages/auth/sign-in';
import AdminDashboard from '../../pages/admin';
import TeacherDashboard from '../../pages/teacher';
import StudentDashboard from '../../pages/student';

export default function AppRouter() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<SignUp />} />
          <Route path="admin-dashboard/*" element={<AdminDashboard/>} /> 
          <Route path="teacher-dashboard/*" element={<TeacherDashboard />} /> 
          <Route path="student-dashboard/*" element={<StudentDashboard />} /> 
        </Routes>
    </Router>
    </>
  )
}
