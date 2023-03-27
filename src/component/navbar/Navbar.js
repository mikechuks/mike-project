import React from 'react'
import "./navbar.css";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
const Navbar = () => {
  return (
    <div>
    <div className='navbar'>
        <h1 className='navbar-logo'>Logo</h1>
        <div className='navbar-content'>
        <p>Home</p>
        <p>Register</p>
        <p>Login</p>
        <p>Contact Us</p>
        </div>
    </div>
    <div className="smallContainer">
        <h1 className="logo">Logo</h1>
            <div className="dropMenu">
              <div className="menu">Menu</div>
            <div className="rightMenu colormenu">
            <span className="linkBar">Home</span>
              <span className="linkBar">Registration</span>
              <span className="linkBar">Login</span>
              <span className="linkBar">Contact Us</span>
              </div>
              </div>
        </div>
    </div>
  )
}

export default Navbar