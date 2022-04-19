import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import googleAuthImg from '../images/google-auth-removebg-preview.png';
import { faBars, faGraduationCap, faIdBadge, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const AddEducation = () => {
   //Links
   const rootUrl = '/';
   const registerUrl = '/register';
   const loginUrl = '/login';
   const profileUrl = '/profiles';
   const dashboardUrl = '/dashboard';
   const noticesDashboardUrl = '/notices-dashboard';
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
                     <FontAwesomeIcon icon={faIdBadge} /> <span className="ml-1">My Account</span>{' '}
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
            <h1 className="large text-primary">Add Your Education</h1>
            <p className="lead">
               <FontAwesomeIcon icon={faGraduationCap} />
               Add any school, bootcamp, etc that you have attended
            </p>
            <small>* = required field</small>
            <form className="form">
               <div className="form-group">
                  <input type="text" placeholder="* School or Bootcamp" name="school" required />
               </div>
               <div className="form-group">
                  <input type="text" placeholder="* Degree or Certificate" name="degree" required />
               </div>
               <div className="form-group">
                  <input type="text" placeholder="Field Of Study" name="fieldofstudy" />
               </div>
               <div className="form-group">
                  <h4>From Date</h4>
                  <input type="date" name="from" />
               </div>
               <div className="form-group">
                  <h4>To Date</h4>
                  <input type="date" name="to" />
               </div>
               <div className="form-group">
                  <p>
                     <input type="checkbox" name="current" value="" /> Current School
                  </p>
               </div>
               <div className="form-group">
                  <textarea name="description" cols="30" rows="5" placeholder="Program Description"></textarea>
               </div>
               <input type="submit" className="btn btn-primary my-1" />
               <a className="btn my-1" href={dashboardUrl}>
                  Go Back
               </a>
            </form>
         </section>
         <footer className="footer">
            <p>Copyright Skill Academy - All Rights Reserved</p>
         </footer>
      </>
   );
};

export default AddEducation;
