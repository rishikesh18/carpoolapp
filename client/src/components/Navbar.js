import React from "react";
import "./pages.css";
//import LoginButton from './LoginButton';
//import LoginMenu from './LoginMenu';

const NavBar = () => (
  <div>
    <nav className="navbar navbar-default">
    <div className="container" id="header">
        <div className="nav navbar-nav navbar-left inline-navbar">
              <h3 id ="titlebar"><a href="/">UNC-BC 2018 Car Pool APP</a> </h3>
        
        </div>
      
        <div>
        <ul className="nav navbar-nav navbar-right inline-navbar">
          <li><a href="/">Home</a></li>
          <li> <span id="span1">|</span></li>
          <li><a href="/search">Search</a></li>
          <li> <span id="span1">|</span></li>
          <li><a href="/account">My Account</a></li>
          <li> <span id="span1">|</span></li>
          <li><a href="/login">Logout</a></li>
                
        </ul>
        </div> 
    </div>
  </nav>
  </div>
);

export default NavBar;