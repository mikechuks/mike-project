import React from 'react'
import "./profilenavbar.css";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
const Profilenavbar = () => {
  return (
    <div>
    <div className='navbar'>
        <h1 className='navbar-logo'>Logo</h1>
        <div className='navbar-content'>
        <p>Dashboard</p>
        <p>Shop</p>
        <p>Setting</p>
        <p>LogOut</p>
        </div>
    </div>
    <div className="smallContainer">
        <h1 className="logo">Logo</h1>
            <div className="dropMenu">
              <div className="menu">Menu</div>
            <div className="rightMenu colormenu">
            <span className="linkBar">Dashboard</span>
              <span className="linkBar">Shop</span>
              <span className="linkBar">Setting</span>
              <span className="linkBar">LogOut</span>
              </div>
              </div>
        </div>
    </div>
  )
}

export default Profilenavbar