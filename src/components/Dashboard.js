import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { faBell, faBlackboard, faIdBadge, faSignOutAlt, faUser, faUserCircle, faBars, faGraduationCap, faBookOpen, faBook, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
   const rootUrl = '/';
   const registerUrl = '/register';
   const loginUrl = '/login';
   const profileUrl = '/profiles';
   const dashboardUrl = '/dashboard';
   const noticesDashboardUrl = '/notices-dashboard';
   const postUrl = '/post';
   const createProfileUrl = '/create-profile';
   const addExperienceUrl = '/add-experience';
   const addEducationUrl = '/add-education';
   const addNoticeUrl = '/add-notice';
   const addExamUrl = '/add-exam';
   const coursesUrl = '/courses';

   return (
      <>
         <nav className="navbar bg-dark">
            <h1>
               <a href={rootUrl}>
                  <FontAwesomeIcon icon="fas fa-code" /> {'</> Skill Academy'}
               </a>
            </h1>

            <ul>
               <li>
                  <a href={profileUrl}>
                     <FontAwesomeIcon icon={faIdBadge} /> <span className="ml-1">My Account</span>
                  </a>
               </li>
               <li>
                  <a href={dashboardUrl} title="Dashboard">
                     <FontAwesomeIcon icon={faUser} /> <span className="hide-sm ml-1">Dashboard</span>
                  </a>
               </li>
               <li>
                  <a href={noticesDashboardUrl} title="Dashboard">
                     <FontAwesomeIcon icon={faBell} /> <span className="hide-sm ml-1">Notices</span>
                  </a>
               </li>
               <li>
                  <a href={loginUrl}>
                     <FontAwesomeIcon icon={faSignOutAlt} />
                     <span className="hide-sm ml-1">Logout</span>
                  </a>
               </li>
            </ul>
            <FontAwesomeIcon icon={faBars} className="burger-icon" />
         </nav>

         <section className="container">
            <h1 className="large text-primary">Dashboard</h1>
            <p className="lead">
               <FontAwesomeIcon icon={faUser} /> Welcome John Doe
            </p>
            <div className="dash-buttons">
               <a href={createProfileUrl} className="btn">
                  <FontAwesomeIcon className="text-primary" icon={faUserCircle} /> Edit Profile
               </a>
               <a href={addExperienceUrl} className="btn">
                  <FontAwesomeIcon className="text-primary" icon={faBlackboard} /> Add Experience
               </a>
               <a href={addEducationUrl} className="btn">
                  <FontAwesomeIcon className="text-primary" icon={faGraduationCap} /> Add Education
               </a>
               <a href={addNoticeUrl} className="btn">
                  <FontAwesomeIcon className="text-primary" icon={faBookOpen} /> Add Notice
               </a>
               <a href={addExamUrl} className="btn">
                  <FontAwesomeIcon className="text-primary" icon={faBook} /> Create Exam
               </a>
               <a href={coursesUrl} className="btn">
                  <FontAwesomeIcon className="text-primary" icon={faLaptopCode} /> My Courses
               </a>
            </div>

            <h2 className="my-2">Experience Credentials</h2>
            <table className="table">
               <thead>
                  <tr>
                     <th>Company</th>
                     <th className="hide-sm">Title</th>
                     <th className="hide-sm">Years</th>
                     <th></th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Microsoft</td>
                     <td className="hide-sm">Senior Software Engineer</td>
                     <td className="hide-sm">Jan 2015 - Current</td>
                     <td>
                        <button className="btn btn-success">Update</button>
                     </td>
                     <td>
                        <button className="btn btn-danger">Delete</button>
                     </td>
                  </tr>

                  <tr>
                     <td>Google</td>
                     <td className="hide-sm">Senior Software Engineer</td>
                     <td className="hide-sm">Jan 2011 - 2014</td>
                     <td>
                        <button className="btn btn-success">Update</button>
                     </td>
                     <td>
                        <button className="btn btn-danger">Delete</button>
                     </td>
                  </tr>
               </tbody>
            </table>

            <h2 className="my-2">Education Credentials</h2>
            <table className="table">
               <thead>
                  <tr>
                     <th>School</th>
                     <th className="hide-sm">Degree</th>
                     <th className="hide-sm">Years</th>
                     <th></th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>University of California</td>
                     <td className="hide-sm">Bsc(hons) in Information Technology Specialized in Software Engineering</td>
                     <td className="hide-sm">June 2006 - June 2010</td>
                     <td>
                        <button className="btn btn-success">Update</button>
                     </td>
                     <td>
                        <button className="btn btn-danger">Delete</button>
                     </td>
                  </tr>
               </tbody>
            </table>

            <div className="my-2">
               <button className="btn btn-danger">
                  <i className="fas fa-user-minus"></i> Delete My Account
               </button>
            </div>
         </section>
         <footer className="footer">
            <p>Copyright Skill Academy - All Rights Reserved</p>
         </footer>
      </>
   );
};

export default Dashboard;
