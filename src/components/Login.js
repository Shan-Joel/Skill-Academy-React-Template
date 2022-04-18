import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import googleAuthImg from '../images/google-auth-removebg-preview.png';

const Login = () => {
   //Links
   const rootUrl = '/';
   const registerUrl = '/register';
   const loginUrl = '/login';
   const profileUrl = '/profiles';
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
                     <FontAwesomeIcon icon="fas fa-code" /> <span className="ml-1">My Account</span>
                  </a>
               </li>
               <li>
                  <a href={registerUrl}>
                     <FontAwesomeIcon icon="fa fa-user-plus" /> <span className="ml-1">Register</span>
                  </a>
               </li>
               <li>
                  <a href={loginUrl}>
                     <FontAwesomeIcon icon="fa fa-user-check" /> <span className="ml-1">Login</span>
                  </a>
               </li>
            </ul>
            <FontAwesomeIcon icon="fa fa-bars" className="burger-icon" />
         </nav>

         <section className="container">
            {/* Alert Messages */}
            <div className="alert alert-danger">Error Message</div>
            <div className="alert alert-success">Success Message</div>

            <h1 className="large text-primary">Sign In</h1>
            <p className="lead">
               <FontAwesomeIcon icon="fas fa-user" /> Sign into Your Account
            </p>

            <form action="dashboard.html" className="form">
               <div className="form-group">
                  <input type="email" placeholder="Email" />
               </div>
               <div className="form-group">
                  <input type="password" placeholder="Password" minlength="6" />
               </div>

               <div className="form-group">
                  <input type="submit" value="Login" className="btn btn-primary" />
               </div>
            </form>

            <p className="my-1">
               Don't have an account? <a href={registerUrl}>Sign Up</a>
            </p>
            <div className="google-auth">
               <img src={googleAuthImg} alt="" />
            </div>
            <p className="text-center">Sign in with Google</p>
         </section>

         <footer className="footer">
            <p>Copyright Skill Academy - All Rights Reserved</p>
         </footer>
      </>
   );
};

export default Login;
