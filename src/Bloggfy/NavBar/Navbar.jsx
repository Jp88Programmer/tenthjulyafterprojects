import React from 'react'
import {  Link } from 'react-router-dom'
// import Home from "../Components/Home";
// import About from '../Components/About'
// import Blog from '../Components/Blog'
// import Contact from '../Components/Contact'
import "./Navbar.css";
const Navbar = () => {
  return (
      <>
        <nav className='nav-bar'>
      <ul>
        <li className="nav-list">
          <Link to="/">Home</Link>
          </li>
        <li className="nav-list"><Link to="/blog">Blog</Link></li>
        <li className="nav-list"><Link to="/about">About</Link></li>
        <li className="nav-list"><Link to="/service">Service</Link></li>
      </ul>
    </nav>
      </>
      
    
  );
}

export default Navbar

