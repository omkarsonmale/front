import React, { useState } from "react";
import "./newnavbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillSetting } from "react-icons/ai";
// import BE from "../src/components/Images/BE.png";
import { NavLink } from "react-router-dom";
import Person2Icon from '@mui/icons-material/Person2';
// import TV from './components/Images/TechVenture-logos_transparent.png';
import logo from './components/Images/TechVenture-White.png'

// If Newnavbar is showing error then and newnavbar.js file name starting with small letter just 
//made the first letter of newnavbar.js file to Newnavbar.js that is uppercase first letter

const Newnavbar = () => {
  const home = () => {
    window.location.href = "#frontendroad";
  };
  const motivation = () => {
    window.location.href = "#projectsid";
  };
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <div><img src={logo} width="113px" /></div>
          <div><label className="label-TV">TechVenture</label></div>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink onClick={home} className={"deco"}>Tech roadmap</NavLink>
            </li>
            <li>
              <NavLink onClick={motivation}  className={"deco"}>Explore projects</NavLink>
            </li>
            <li>
              <NavLink to="/chat"  className={"deco"}>Chat</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <Person2Icon className='setting' />
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Newnavbar;