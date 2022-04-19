import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { faBell, faIdBadge, faSignOutAlt, faThumbsDown, faThumbsUp, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

const NoticesDashboard = () => {
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
            <h1 className="large text-primary">Notices</h1>
            <p className="lead">
               <FontAwesomeIcon icon={faUser} /> Welcome to the Community
            </p>
            <div className="post-form">
               <div className="post bg-white my-1 p-1">
                  <div>
                     <a href={profileUrl}>
                        <img className="round-img" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" />
                        <h4>John Doe</h4>
                     </a>
                  </div>

                  <div>
                     <p className="my-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolores officia assumenda dolor maiores sint pariatur quia voluptatibus voluptate perspiciatis commodi possimus nemo aut, voluptas expedita facilis amet hic culpa.</p>
                     <button className="btn">
                        <FontAwesomeIcon icon={faThumbsUp} /> <span>4</span>
                     </button>
                     <button className="btn">
                        <FontAwesomeIcon icon={faThumbsDown} />
                     </button>
                     <a href={postUrl} className="btn btn-primary">
                        Discussion
                     </a>
                  </div>
               </div>
               <div className="post bg-white my-1 p-1">
                  <div>
                     <a href={profileUrl}>
                        <img className="round-img" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" />
                        <h4>John Doe</h4>
                     </a>
                  </div>

                  <div>
                     <p className="my-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolores officia assumenda dolor maiores sint pariatur quia voluptatibus voluptate perspiciatis commodi possimus nemo aut, voluptas expedita facilis amet hic culpa.</p>
                     <button className="btn">
                        <FontAwesomeIcon icon={faThumbsUp} /> <span>4</span>
                     </button>
                     <button className="btn">
                        <FontAwesomeIcon icon={faThumbsDown} />
                     </button>
                     <a href={postUrl} className="btn btn-primary">
                        Discussion
                     </a>
                  </div>
               </div>
               <div className="post bg-white my-1 p-1">
                  <div>
                     <a href={profileUrl}>
                        <img className="round-img" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" />
                        <h4>John Doe</h4>
                     </a>
                  </div>

                  <div>
                     <p className="my-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolores officia assumenda dolor maiores sint pariatur quia voluptatibus voluptate perspiciatis commodi possimus nemo aut, voluptas expedita facilis amet hic culpa.</p>
                     <button className="btn">
                        <FontAwesomeIcon icon={faThumbsUp} /> <span>4</span>
                     </button>
                     <button className="btn">
                        <FontAwesomeIcon icon={faThumbsDown} />
                     </button>
                     <a href={postUrl} className="btn btn-primary">
                        Discussion
                     </a>
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

export default NoticesDashboard;
