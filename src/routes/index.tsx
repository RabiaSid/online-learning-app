import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import SignUp from '../pages/auth/sign-up';
import SignIn from '../pages/auth/sign-in';
import Dashboard from '../pages/admin/index';

export default function AppRouter() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<SignUp />} />
          <Route path="dashboard/*" element={<Dashboard />} /> 
        </Routes>
    </Router>
    </>
  )
}
