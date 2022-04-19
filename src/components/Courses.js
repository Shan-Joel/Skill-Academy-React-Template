import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { faBell, faIdBadge, faLaptopCode, faSignOutAlt, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

const Courses = () => {
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
            <div className="profile-grid mt-1">
               {/* Course Materials  */}
               <div className="profile-github mt-minus-5 mt-min-5">
                  <h1 className="text-primary my-1">
                     <FontAwesomeIcon icon={faLaptopCode} /> My Courses
                  </h1>
                  <div className="repo bg-white my-1 p-1">
                     <div>
                        <h4>
                           <a href="#">Course One</a>
                        </h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, illum!</p>
                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic laudantium unde magni nesciunt dicta ducimus nulla dolorem quibusdam optio tenetur ex ea illo, illum repellendus sit similique totam assumenda error.</small>
                     </div>

                     <div>
                        <ul>
                           <li className="badge badge-primary">View</li>
                           <li className="badge badge-dark">Download</li>
                           <li className="badge badge-light">Watch Later</li>
                        </ul>
                     </div>
                  </div>

                  <div className="repo bg-white my-1 p-1">
                     <div>
                        <h4>
                           <a href="#">Course One</a>
                        </h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, illum!</p>
                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic laudantium unde magni nesciunt dicta ducimus nulla dolorem quibusdam optio tenetur ex ea illo, illum repellendus sit similique totam assumenda error.</small>
                     </div>

                     <div>
                        <ul>
                           <li className="badge badge-primary">View</li>
                           <li className="badge badge-dark">Download</li>
                           <li className="badge badge-light">Watch Later</li>
                        </ul>
                     </div>
                  </div>

                  <div className="repo bg-white my-1 p-1">
                     <div>
                        <h4>
                           <a href="#">Course One</a>
                        </h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, illum!</p>
                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic laudantium unde magni nesciunt dicta ducimus nulla dolorem quibusdam optio tenetur ex ea illo, illum repellendus sit similique totam assumenda error.</small>
                     </div>

                     <div>
                        <ul>
                           <li className="badge badge-primary">View</li>
                           <li className="badge badge-dark">Download</li>
                           <li className="badge badge-light">Watch Later</li>
                        </ul>
                     </div>
                  </div>

                  <div className="repo bg-white my-1 p-1">
                     <div>
                        <h4>
                           <a href="#">Course One</a>
                        </h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, illum!</p>
                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic laudantium unde magni nesciunt dicta ducimus nulla dolorem quibusdam optio tenetur ex ea illo, illum repellendus sit similique totam assumenda error.</small>
                     </div>

                     <div>
                        <ul>
                           <li className="badge badge-primary">View</li>
                           <li className="badge badge-dark">Download</li>
                           <li className="badge badge-light">Watch Later</li>
                        </ul>
                     </div>
                  </div>

                  <div className="repo bg-white my-1 p-1">
                     <div>
                        <h4>
                           <a href="#">Course Three</a>
                        </h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, illum!</p>
                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic laudantium unde magni nesciunt dicta ducimus nulla dolorem quibusdam optio tenetur ex ea illo, illum repellendus sit similique totam assumenda error.</small>
                     </div>

                     <div>
                        <ul>
                           <li className="badge badge-primary">View</li>
                           <li className="badge badge-dark">Download</li>
                           <li className="badge badge-light">Watch Later</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <footer className="footer">
            <p>Copyright Skill Academy - All Rights Reserved</p>
         </footer>
      </>
   );
};

export default Courses;
