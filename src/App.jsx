import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import EditUser from './pages/EditUser';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/dashboard' />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/profile/:id' element={<UserProfile />} />
      <Route path='/edit/:id' element={<EditUser />} />
    </Routes>
  );
}

export default App;