import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
   //Links
   const rootUrl = '/';
   const registerUrl = '/register';
   const loginUrl = '/login';
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
                  <a href={registerUrl}>
                     {/* <FontAwesomeIcon icon="fa fa-user-plus" /> */}
                     <FontAwesomeIcon icon={faUserPlus} />
                     <span className="ml-1">Register</span>
                  </a>
               </li>
               <li>
                  <a href={loginUrl}>
                     <FontAwesomeIcon icon={faUserCheck} />
                     <span className="ml-1">Login</span>
                  </a>
               </li>
            </ul>

            <FontAwesomeIcon icon={faBars} className="burger-icon" />
         </nav>

         <section className="landing">
            <div className="dark-overlay">
               <div className="landing-inner">
                  <h1 className="x-large">Skill Academy</h1>
                  <p className="lead">Education is smart enough to change the human mind positively</p>
                  <div className="button">
                     <a href={registerUrl} className="btn btn-primary">
                        Sign Up
                     </a>

                     <a href={loginUrl} className="btn min-w-84">
                        Login
                     </a>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Home;
