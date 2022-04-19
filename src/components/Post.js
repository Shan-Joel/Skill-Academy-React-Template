import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { faBell, faIdBadge, faSignOutAlt, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

const Post = () => {
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
            <a href={addNotices} className="btn">
               Back To Notices
            </a>
            <div className="post bg-white p-1 my-1">
               <div>
                  <a href={profileUrl}>
                     <img className="round-img" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" />
                     <h4>John Doe</h4>
                  </a>
               </div>
               <div>
                  <p className="my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis eveniet cum cupiditate aliquam?</p>
               </div>
            </div>

            <div className="post-form">
               <div className="post-form-header bg-primary">
                  <h3>Leave A Comment</h3>
               </div>
               <form className="form my-1">
                  <textarea name="text" cols="30" rows="5" placeholder="Comment on this notice"></textarea>
                  <input type="submit" className="btn btn-dark my-1" value="Submit" />
               </form>
            </div>

            <div className="posts">
               <div className="post bg-white p-1 my-1">
                  <div>
                     <a href={profileUrl}>
                        <img className="round-img" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" />
                        <h4>John Doe</h4>
                     </a>
                  </div>
                  <div>
                     <p className="my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis eveniet cum cupiditate aliquam?</p>
                  </div>
               </div>

               <div className="post bg-white p-1 my-1">
                  <div>
                     <a href={profileUrl}>
                        <img className="round-img" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" />
                        <h4>John Doe</h4>
                     </a>
                  </div>
                  <div>
                     <p className="my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis eveniet cum cupiditate aliquam?</p>
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

export default Post;
