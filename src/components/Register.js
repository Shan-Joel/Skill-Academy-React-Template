import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import googleAuthImg from '../images/google-auth-removebg-preview.png';
import { faIdBadge, faUser, faUserCheck, faUserPlus, faBars } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
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
                     <FontAwesomeIcon icon={faIdBadge} /> <span className="ml-1">My Account</span>
                  </a>
               </li>
               <li>
                  <a href={registerUrl}>
                     <FontAwesomeIcon icon={faUserPlus} /> <span className="ml-1">Register</span>
                  </a>
               </li>
               <li>
                  <a href={loginUrl}>
                     <FontAwesomeIcon icon={faUserCheck} /> <span className="ml-1">Login</span>
                  </a>
               </li>
            </ul>
            <FontAwesomeIcon icon={faBars} className="burger-icon" />
         </nav>

         <section className="container">
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead">
               <FontAwesomeIcon icon={faUser} /> Create Your Account
            </p>
            <form className="form">
               <div className="form-group">
                  <input type="text" placeholder="Name" />
               </div>
               <div className="form-group">
                  <input type="email" placeholder="Email" />
               </div>
               <div className="form-group">
                  <input type="password" placeholder="Password" minlength="6" />
               </div>
               <div className="form-group">
                  <input type="password" placeholder="Confirm Password" minlength="6" />
               </div>
               <div className="form-group">
                  <input type="submit" value="Register" className="btn btn-primary" />
               </div>
            </form>
            <p className="my-1">
               Already have an account? <a href={loginUrl}>Sign In</a>
            </p>
            <div className="google-auth">
               <img src={googleAuthImg} alt="" />
            </div>
            <p className="text-center">Sign up with Google</p>
         </section>
         <footer className="footer">
            <p>Copyright Skill Academy - All Rights Reserved</p>
         </footer>
      </>
   );
};

export default Register;
