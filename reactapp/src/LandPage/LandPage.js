import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import ContactComp from './ContactComp';
import './LandPage.css';
import Login from './Login';
//import Home from './Home';
import About from './About';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import UserDash from '../UserDash';
import AppRouter from '../adminComponents/AppRouter';
import AdminDash from '../adminComponents/AdminDash';




const Home = () => (
    <div className='card-body' style={{ 'height': '80vh' }}>
      <p>Upgrade Your Website to the Latest Version of Umbraco to Stay Updated!</p>
    </div>
  );



const LandPage = () => {
  return (
    <Router>
      <div className='card'>
        <div className='header card-header'>
          <a href="#default" className="logo">Beast Technologies</a>
          <div className="header-right">
            <Link to='/' className='btn'>Home</Link>
            <Link to="/contact" className='btn'>Contact</Link>
            <Link to="/about" className='btn'>About</Link>
            <Link to="/login" className='btn'>Login</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactComp />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userdash" element={<UserDash/>}></Route>
          <Route path='/admin' element={<AdminDash></AdminDash>}></Route>
        </Routes>
        <div className='card-footer'>
        <div className='footer-right'>
//                 <FaGithub className='icon github'/>   
//                 <FaLinkedin className='icon linkedin'/>
//                 <FaFacebook className='icon facebook'/>
//                 </div>
//                 <div className='footer-left'>
//                 <p>©2023 Beast Technologies. All Rights Reserved</p>
//                 </div>
        </div>
      </div>
    </Router>
  );
};

export default LandPage;



// import MyRoute from './MyRoute';
// import React from 'react';
// import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
// import ContactComp from './ContactComp';
// import './LandPage.css'

// const LandPage = () => {
//   return (
//     <Router>
//       <div className='card'>
//         <div className='header card-header'>
//           <a href="#default" className="logo">Beast Technologies</a>
//           <div className="header-right">
//             <Link to='/' className='btn'>Home</Link>
//             <Link to="/contact" className='btn'>Contact</Link>
//             <Link to="/about" className='btn'>About</Link>
//             <Link to="/login" className='btn'>Login</Link>
//           </div>
//         </div>
//         <div className='card-body' style={{ 'height': '80vh' }}>
//           <p>Upgrade Your Website to the Latest Version of Umbraco to Stay Updated!</p>
          
//         </div>
//         <div className='card-footer'>
//           <div className='footer-right'>
//             {/* Icons */}
//           </div>
//           <div className='footer-left'>
//             <p>©2023 Beast Technologies. All Rights Reserved</p>
//           </div>
//         </div>
//         <Routes>
//           <Route path="/contact" element={<ContactComp />} />
//           {/* Define other routes and components */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default LandPage;


// import React, {Component}from 'react'
// import './LandPage.css'
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// import ContactComp from './ContactComp'
// import MyRoute from './MyRoute'
// import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';



// const LandPage = () => {
//     return (
//         <body className='card'>
            
//                 <div className='header card-header'>
//                     <a href="#default" class="logo">Beast Technologies</a>
//                     <div class="header-right">
//                       <Link to=''  className='btn'>Home</Link>
//                       <Link to="/contact" className='btn'>contact</Link>
//                       <Link to="/about" className='btn'>About</Link>
//                       <Link to="/login" className='btn'>Login</Link>

//                     </div>
//                 </div>
//                 <div className='card-body' style={{'height':'80vh'}}>
                    
//                     <p>Upgrade Your Website to the Latest Version
//                         of Umbraco to Stay Updated!</p>
//                 </div>

//             <div className='card-footer'> 
//             <div className='footer-right'>
//                 <FaGithub className='icon github'/>   
//                 <FaLinkedin className='icon linkedin'/>
//                 <FaFacebook className='icon facebook'/>
//                 </div>
//                 <div className='footer-left'>
//                 <p>©2023 Beast Technologies. All Rights Reserved</p>
//                 </div>
//             </div>
//             </body>
//     )
// }

// export default LandPage



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Facebook, Twitter, Instagram, LinkedIn, GitHub } from '@mui/icons-material';

// const LandPage = () => {
//     return (
//         <body className='card'>
//             <div className='header card-header'>
//                 <a href="#default" className="logo">Beast Technologies</a>
//                 <div className="header-right">
//                     <Link to='' className='btn'>Home</Link>
//                     <Link to="/contact" className='btn'>Contact</Link>
//                     <Link to="/about" className='btn'>About</Link>
//                     <Link to="/login" className='btn'>Login</Link>
//                 </div>
//             </div>
//             <div className='card-body' style={{ 'height': '80vh' }}>
//                 <p>Upgrade Your Website to the Latest Version of Umbraco to Stay Updated!</p>
//             </div>
//             <div className='footer card-footer'>
//                 <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
//                     <Facebook />
//                 </a>
//                 <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
//                     <Twitter />
//                 </a>
//                 <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
//                     {/* Use the actual Google icon from Material-UI */}
//                     {/* For example, you might use '@mui/icons-material/Google' */}
//                 </a>
//                 <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
//                     <Instagram />
//                 </a>
//                 <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
//                     <LinkedIn />
//                 </a>
//                 <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
//                     <GitHub />
//                 </a>
//                 <p>©2023 Beast Technologies. All Rights Reserved</p>
//             </div>
//         </body>
//     );
// };

// export default LandPage;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

// const LandPage = () => {
//     return (
//         <body className='card'>
//             <div className='header card-header'>
//                 <a href="#default" className="logo">Beast Technologies</a>
//                 <div className="header-right">
//                     <Link to='' className='btn'>Home</Link>
//                     <Link to="/contact" className='btn'>Contact</Link>
//                     <Link to="/about" className='btn'>About</Link>
//                     <Link to="/login" className='btn'>Login</Link>
//                 </div>
//             </div>
//             <div className='card-body' style={{ 'height': '80vh' }}>
//                 <p>Upgrade Your Website to the Latest Version of Umbraco to Stay Updated!</p>
//             </div>
//             <div className='footer card-footer'>
//                 <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
//                     <FaFacebook />
//                 </a>
//                 <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
//                     <FaTwitter />
//                 </a>
//                 <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
//                     {/* Use a suitable icon for Google. For example, FaGoogle. */}
//                 </a>
//                 <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
//                     <FaInstagram />
//                 </a>
//                 <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
//                     <FaLinkedin />
//                 </a>
//                 <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
//                     <FaGithub />
//                 </a>
//                 <p>©2023 Beast Technologies. All Rights Reserved</p>
//             </div>
//         </body>
//     );
// };

// export default LandPage;

