import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Profiles = () => {
   const rootUrl = '/';
   const registerUrl = '/register';
   const loginUrl = '/login';
   const profileUrl = '/profiles';
   const dashboardUrl = '/dashboard';
   const noticesDashboardUrl = '/notices-dashboard';
   const postUrl = '/post';
   const addNotices = '/add-notice';
   const profilesUrl = '/profile';
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
                     <i className="fa fa-id-badge"></i>
                     <FontAwesomeIcon icon="fas fa-code" /> <span className="ml-1">My Account</span>
                  </a>
               </li>
               <li>
                  <a href={dashboardUrl} title="Dashboard">
                     <i className="fas fa-user"></i>
                     <FontAwesomeIcon icon="fas fa-code" /> <span className="hide-sm ml-1">Dashboard</span>
                  </a>
               </li>
               <li>
                  <a href={noticesDashboardUrl} title="Dashboard">
                     <i className="fa fa-bell"></i>
                     <FontAwesomeIcon icon="fas fa-code" /> <span className="hide-sm ml-1">Notices</span>
                  </a>
               </li>
               <li>
                  <a href={loginUrl}>
                     <FontAwesomeIcon icon="fas fa-sign-out-alt" />
                     <span className="hide-sm ml-1">Logout</span>
                  </a>
               </li>
            </ul>
            <FontAwesomeIcon icon="fa fa-user-plus" classNameName="burger-icon" />
         </nav>

         <section className="container">
            <h1 className="large text-primary">Hi, John Doe</h1>
            <p className="lead">
               <FontAwesomeIcon icon="fab fa-connectdevelop" /> Click view profile to see all details
            </p>
            <div className="profiles">
               <div className="profile bg-light">
                  <img className="round-img" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" />

                  <div>
                     <h2>John Doe</h2>
                     <p>Developer at Microsoft</p>
                     <p>Seattle, WA</p>
                     <a href={profilesUrl} className="btn btn-primary">
                        View Profile
                     </a>
                  </div>

                  <ul>
                     <li className="text-primary">
                        <FontAwesomeIcon icon="fas fa-check" /> HTML
                     </li>
                     <li className="text-primary">
                        <FontAwesomeIcon icon="fas fa-check" /> CSS
                     </li>
                     <li className="text-primary">
                        <FontAwesomeIcon icon="fas fa-check" /> JavaScript
                     </li>
                     <li className="text-primary">
                        <FontAwesomeIcon icon="fas fa-check" /> Python
                     </li>
                  </ul>
               </div>

               {/* <div className="profile bg-light">
               <img className="round-img y-1" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" />

               <div>
                  <h2>John Doe</h2>
                  <p>Developer at Microsoft</p>
                  <p>Seattle, WA</p>
                  <a href="profile.html" className="btn btn-primary"> View Profile </a>
               </div>

               <ul>
                  <li className="text-primary"><i className="fas fa-check"></i> HTML</li>
                  <li className="text-primary"><i className="fas fa-check"></i> CSS</li>
                  <li className="text-primary"><i className="fas fa-check"></i> JavaScript</li>
                  <li className="text-primary"><i className="fas fa-check"></i> Python</li>
               </ul>
            </div>  */}
            </div>
         </section>

         <footer className="footer">
            <p>Copyright Skill Academy - All Rights Reserved</p>
         </footer>
      </>
   );
};

export default Profiles;
