import React,{useRef, useState} from 'react';
import Navbar from "../../component/navbar/Navbar";
import "./update.css";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Profilenavbar from '../../component/profilenavbar/Profilenavbar';
const Update = () => {
  let history = useNavigate();
  const {authLoginStart, user, password, conPass, email, address, genders, authLoginGender, authLoginPass, authLoginEmail, authLoginAddress, authLoginConPass} = useContext(AuthContext);
  const [isSubmit, setIsSubmit] = useState(false);
  const [valid, setValid] = useState(false);
  const inputValue = useRef();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(user && password && conPass  && email && address && genders){
      setValid(true);
    }
    setIsSubmit(true);
  const sendData = {
    username: user,
    email: email,
    password: conPass,
    address: address,
    gender: genders,
  }
  console.log(conPass)
  console.log(sendData);
      axios.post('http://localhost/api/auth.php', sendData).then((result)=>{
        if(result.data.status === "Invalid"){
        alert('Invalid User')}
        else{
          alert("Your  registeration is successfull, your can now sign in")
        } 
      })
  }
  return (
    <>
        <Profilenavbar/>
       <div className="registers">
        <div className="register-contents">
          <div className="update-logo"></div>
          <div className="register-form">
            <form onSubmit={onSubmitHandler}>
            {isSubmit && valid ? <span>Success!!! Your profile has been updated</span> : null}
              <input type="text" placeholder="User" name="username" value={user} onChange={authLoginStart}/>
              <input type="text" placeholder="Email" name="email" value={email} onChange={authLoginEmail}/>
              <input type="password" placeholder="Password"  name="password" value={password} onChange={authLoginPass}/>
              {isSubmit && password.length <= 6 ?<span>Value should not be less than six characters</span> : null}
              <input type="password" placeholder="Confirm Password" name="password" value={conPass} onChange={authLoginConPass}/>
              {isSubmit && conPass.length <= 6 ?<span>Value should not be less than six characters</span> : null}
              {isSubmit && !conPass ?<span>Enter your Confirm Password</span> : null}
              <input type="text" placeholder="Address" name="address" value={address} onChange={authLoginAddress}/> 
              <select name='gender' value={genders} onChange={authLoginGender}>
              <option >Gender</option>
                <option  genders="Male" >Male</option>
                <option  genders="Female" >Female</option>
              </select>
              <button type='submit' name="submit">Edit</button> 
            </form>
          </div>
        </div>
       </div>
    </>
  )
}

export default Update