import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AddEducation from './components/AddEducation';
import AddExam from './components/AddExam';
import AddExperience from './components/AddExperience';
import AddNotice from './components/AddNotice';
import Courses from './components/Courses';
import CreateProfile from './components/CreateProfile';
import Dashboard from './components/Dashboard';
import NoticesDashboard from './components/NoticesDashboard';
import Post from './components/Post';
import Profile from './components/Profile';
import Profiles from './components/Profiles';

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path="/" element={<Home />} Route />
               <Route path="/login" element={<Login />} Route />
               <Route path="/register" element={<Register />} Route />
               <Route path="/add-education" element={<AddEducation />} Route />
               <Route path="/add-exam" element={<AddExam />} Route />
               <Route path="/add-experience" element={<AddExperience />} Route />
               <Route path="/add-notice" element={<AddNotice />} Route />
               <Route path="/courses" element={<Courses />} Route />
               <Route path="/create-profile" element={<CreateProfile />} Route />
               <Route path="/dashboard" element={<Dashboard />} Route />
               <Route path="/notices-dashboard" element={<NoticesDashboard />} Route />
               <Route path="/post" element={<Post />} Route />
               <Route path="/profile" element={<Profile />} Route />
               <Route path="/profiles" element={<Profiles />} Route />
            </Routes>
         </Router>
      </>
   );
}

export default App;
