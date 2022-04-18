import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const CreateProfile = () => {
   const rootUrl = '/';
   const registerUrl = '/register';
   const loginUrl = '/login';
   const profileUrl = '/profiles';
   const dashboardUrl = '/dashboard';
   const noticesDashboardUrl = '/notices-dashboard';
   const postUrl = '/post';
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
            <FontAwesomeIcon icon="fa fa-user-plus" classNameName="burger-icon" />
         </nav>

         <section className="container">
            <h1 className="large text-primary">Create Your Profile</h1>
            <p className="lead">
               <FontAwesomeIcon icon="fas fa-user" /> Let's get some Information to make you profile stand out
            </p>
            <small>* = required fileds</small>
            <form className="form">
               <div className="form-group">
                  <select name="status">
                     <option value="0">* Select Professional Status</option>
                     <option value="Developer">Developer</option>
                     <option value="Junior Developer">Junior Developer</option>
                     <option value="Senior Developer">Senior Developer</option>
                     <option value="Manager">Manager</option>
                     <option value="Student or Learning">Student or Learning</option>
                     <option value="Instructor">Instructor or Teacher</option>
                     <option value="Intern">Intern</option>
                     <option value="Other">Other</option>
                  </select>
                  <small className="form-text">Give us an idea of where you are at in your career</small>
               </div>
               <div className="form-group">
                  <input type="text" placeholder="Company" name="company" />
                  <small className="form-text">Could be your own company or one you work for</small>
               </div>
               <div className="form-group">
                  <input type="text" placeholder="Website" name="website" />
                  <small className="form-text">Could be your own or a company website</small>
               </div>
               <div className="form-group">
                  <input type="text" placeholder="Location" name="location" />
                  <small className="form-text">City & state suggested (eg. Boston, MA)</small>
               </div>
               <div className="form-group">
                  <input type="text" placeholder="* Skills" name="skills" />
                  <small className="form-text">Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</small>
               </div>
               <div className="form-group">
                  <input type="text" placeholder="Github Username" name="githubusername" />
                  <small className="form-text">If you want your latest repos and a Github link, include your username</small>
               </div>
               <div className="form-group">
                  <textarea placeholder="A short bio of yourself" name="bio"></textarea>
                  <small className="form-text">Tell us a little about yourself</small>
               </div>

               <div className="my-2">
                  <button type="button" className="btn btn-light">
                     Add Social Network Links
                  </button>
                  <span>Optional</span>
               </div>

               <div className="form-group social-input">
                  <FontAwesomeIcon icon="fab fa-twitter fa-2x" />
                  <input type="text" placeholder="Twitter URL" name="twitter" />
               </div>

               <div className="form-group social-input">
                  <FontAwesomeIcon icon="fab fa-facebook fa-2x" />
                  <input type="text" placeholder="Facebook URL" name="facebook" />
               </div>

               <div className="form-group social-input">
                  <FontAwesomeIcon icon="fab fa-youtube fa-2x" />
                  <input type="text" placeholder="YouTube URL" name="youtube" />
               </div>

               <div className="form-group social-input">
                  <FontAwesomeIcon icon="fab fa-linkedin fa-2x" />
                  <input type="text" placeholder="Linkedin URL" name="linkedin" />
               </div>

               <div className="form-group social-input">
                  <FontAwesomeIcon icon="fab fa-instagram fa-2x" />
                  <input type="text" placeholder="Instagram URL" name="instagram" />
               </div>
               <input type="submit" className="btn btn-primary my-1" />
               <a className="btn btn-light my-1" href={dashboardUrl}>
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

export default CreateProfile;
