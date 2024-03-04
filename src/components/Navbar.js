import React, { useState } from 'react';
import logo from "../images/logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';



const Navbar = () => {

  const [isMobile , setIsMobile] = useState(false);
  const changeNav = ()=>{
          setIsMobile(!isMobile )
  }
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo"><img src={logo} alt="Logo" /></div>
        <div className={isMobile ? " navbar-links navbar-links-mobile": "navbar-links"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Registration</Link>
          
     </div>
     <div className="humbarger" onClick={changeNav}>
           <GiHamburgerMenu />
      </div> 
      </div>
    </nav>
    </>
  );
};

export default Navbar;