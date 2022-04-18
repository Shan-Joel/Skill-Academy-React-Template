import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AddExam = () => {
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
                     <FontAwesomeIcon icon="fa fa-id-badge" /> <span className="ml-1">My Account</span>
                  </a>
               </li>
               <li>
                  <a href={dashboardUrl} title="Dashboard">
                     <FontAwesomeIcon icon="fas fa-user" /> <span className="hide-sm ml-1">Dashboard</span>
                  </a>
               </li>
               <li>
                  <a href={noticesDashboardUrl} title="Dashboard">
                     <FontAwesomeIcon icon="fa fa-bell" /> <span className="hide-sm ml-1">Notices</span>
                  </a>
               </li>
               <li>
                  <a href={loginUrl}>
                     <FontAwesomeIcon icon="fas fa-sign-out-alt" />
                     <span className="hide-sm">Logout</span>
                  </a>
               </li>
            </ul>
            <FontAwesomeIcon icon="fa fa-user-plus" className="burger-icon" />
         </nav>
         <section className="container">
            <h1 className="large text-primary">Create an Exam</h1>
            <p className="lead">
               <FontAwesomeIcon icon="fas fa-graduation-cap" /> Fill in the following details to create an exam
            </p>
            <small>* = required field</small>
            <form className="form">
               <div className="form-group">
                  <input type="text" placeholder="* Exam Name" name="ex-name" required />
               </div>
               <div className="form-group">
                  <input type="text" placeholder="* Subject" name="ex-subject" required />
               </div>
               <div className="form-group">
                  <input type="text" placeholder="Field Of Study" name="fieldofstudy" />
               </div>
               <div className="form-group">
                  <h4>Date</h4>
                  <input type="date" name="from" />
               </div>
               <div className="form-group">
                  <h4>Time From</h4>
                  <input type="time" name="from" />
               </div>
               <div className="form-group">
                  <h4>Time To</h4>
                  <input type="time" name="to" />
               </div>
               <div className="form-group">
                  <p>
                     <input type="checkbox" name="current" value="" /> Current University
                  </p>
               </div>
               <div className="form-group">
                  <textarea name="question" cols="30" rows="5" placeholder="Question"></textarea>
               </div>
               <div className="form-group">
                  <textarea name="answer" cols="30" rows="5" placeholder="Answer"></textarea>
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

export default AddExam;
