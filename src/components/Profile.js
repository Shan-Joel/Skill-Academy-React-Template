import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Profile = () => {
   const rootUrl = '/';
   const registerUrl = '/register';
   const loginUrl = '/login';
   const profileUrl = '/profiles';
   const dashboardUrl = '/dashboard';
   const noticesDashboardUrl = '/notices-dashboard';
   const postUrl = '/post';
   const addNotices = '/add-notice';

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
                     <FontAwesomeIcon icon="fa fa-bell" />
                     <span className="hide-sm">Logout</span>
                  </a>
               </li>
            </ul>
            <FontAwesomeIcon icon="fa fa-user-plus" classNameName="burger-icon" />
         </nav>

         <section className="container">
            <a href={profileUrl} className="btn">
               Back to Profile
            </a>

            <div className="profile-grid my-1">
               {/* <!-- Top --> */}
               <div className="profile-top bg-primary p-2">
                  <img className="round-img" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" />
                  <h1>John Doe</h1>
                  <p className="lead">Developer at Microsoft</p>
                  <p>Seattle, Washington</p>
                  <div className="icons my-1">
                     <a href="#">
                        <FontAwesomeIcon icon="fas fa-globe fa-2x" />
                     </a>

                     <a href="#">
                        <FontAwesomeIcon icon="fab fa-twitter fa-2x" />
                     </a>

                     <a href="#">
                        <FontAwesomeIcon icon="fab fa-linkedin fa-2x" />
                     </a>

                     <a href="#">
                        <FontAwesomeIcon icon="fab fa-instagram fa-2x" />
                     </a>

                     <a href="#">
                        <FontAwesomeIcon icon="fab fa-facebook fa-2x" />
                     </a>
                  </div>
               </div>

               {/* <!-- About --> */}
               <div className="profile-about bg-light p-2">
                  <h2 className="text-primary">John's Bio</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit reiciendis nihil autem illum maxime fugiat ex earum quaerat quo dolor neque deleniti aliquid, totam aut omnis ipsa natus fugit! Minus eius, cupiditate aut animi quaerat optio provident suscipit dolorum molestiae?</p>
                  <div className="line"></div>
                  <h2 className="text-primary">Skill Set</h2>
                  <div className="skills">
                     <div className="p-1">
                        <FontAwesomeIcon icon="fas fa-check" /> HTML
                     </div>
                     <div className="p-1">
                        <FontAwesomeIcon icon="fas fa-check" /> CSS
                     </div>
                     <div className="p-1">
                        <FontAwesomeIcon icon="fas fa-check" /> Sass
                     </div>
                     <div className="p-1">
                        <FontAwesomeIcon icon="fas fa-check" /> JavaScript
                     </div>
                     <div className="p-1">
                        <FontAwesomeIcon icon="fas fa-check" /> Typescript
                     </div>
                     <div className="p-1">
                        <FontAwesomeIcon icon="fas fa-check" /> React.JS
                     </div>
                     <div className="p-1">
                        <FontAwesomeIcon icon="fas fa-check" /> Angular
                     </div>
                  </div>
               </div>
               {/* <!-- Experience --> */}
               <div className="profile-exp bg-white p-2">
                  <h2 className="text-primary">Experiences</h2>
                  <div>
                     <h3>Microsoft</h3>
                     <p>Jan 2015 - Current</p>
                     <p>
                        <strong>Position: </strong>Senior Software Engineer
                     </p>
                     <p>
                        <strong>Description: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero blanditiis deserunt laboriosam rerum eligendi.
                     </p>
                  </div>

                  <div className="my-1">
                     <h3>Google</h3>
                     <p>Jan 2011 - 2014</p>
                     <p>
                        <strong>Position: </strong>Senior Software Engineer
                     </p>
                     <p>
                        <strong>Description: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero blanditiis deserunt laboriosam rerum eligendi.
                     </p>
                  </div>
               </div>

               {/* <!-- Education --> */}
               <div className="profile-edu bg-white p-2">
                  <h2 className="text-primary">Education</h2>
                  <div>
                     <h3>University of California</h3>
                     <p>June 2006 - June 2010</p>
                     <p>
                        <strong>Degree: </strong>Bsc(hons) in Information Technology Specialized in Software Engineering
                     </p>
                     <p>
                        <strong>Description: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero blanditiis deserunt laboriosam rerum eligendi.
                     </p>
                  </div>
               </div>
               {/* <!-- Github Repos --> */}
               <div className="profile-github">
                  <h2 className="text-primary my-1">
                     <FontAwesomeIcon icon="fab fa-github" /> Github Repos
                  </h2>
                  <div className="repo bg-white my-1 p-1">
                     <div>
                        <h4>
                           <a href="#">Repo One</a>
                        </h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, illum!</p>
                     </div>

                     <div>
                        <ul>
                           <li className="badge badge-primary">Stars: 40</li>
                           <li className="badge badge-dark">Watchers: 20</li>
                           <li className="badge badge-light">Forks: 34</li>
                        </ul>
                     </div>
                  </div>

                  <div className="repo bg-white my-1 p-1">
                     <div>
                        <h4>
                           <a href="#">Repo Two</a>
                        </h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, illum!</p>
                     </div>

                     <div>
                        <ul>
                           <li className="badge badge-primary">Stars: 40</li>
                           <li className="badge badge-dark">Watchers: 20</li>
                           <li className="badge badge-light">Forks: 34</li>
                        </ul>
                     </div>
                  </div>

                  <div className="repo bg-white my-1 p-1">
                     <div>
                        <h4>
                           <a href="#">Repo Three</a>
                        </h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, illum!</p>
                     </div>

                     <div>
                        <ul>
                           <li className="badge badge-primary">Stars: 40</li>
                           <li className="badge badge-dark">Watchers: 20</li>
                           <li className="badge badge-light">Forks: 34</li>
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

export default Profile;
