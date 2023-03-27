import React,{useRef, useState} from 'react';
import Navbar from "../../component/navbar/Navbar";
import "./registration.css";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Registration = () => {
  let history = useNavigate();
  const {authLoginStart, userForm, password, conPass, email, address, genders, authLoginGender, authLoginPass, authLoginEmail, authLoginAddress, authLoginConPass} = useContext(AuthContext);
  const [isSubmit, setIsSubmit] = useState(false);
  const [valid, setValid] = useState(false);
  const inputValue = useRef();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(userForm && password && conPass  && email && address && genders){
      setValid(true);
    }
    setIsSubmit(true);
  const sendData = {
    username: userForm,
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
        <Navbar/>
       <div className="register">
        <div className="register-content">
          <div className="register-logo">Logo</div>
          <div className="register-form">
            <form onSubmit={onSubmitHandler}>
            {isSubmit && valid ? <span>Success!!! Thank you</span> : null}
              <input type="text" placeholder="User" name="username" value={userForm} onChange={authLoginStart}/>
              {isSubmit && !userForm ?<span>Enter your Username</span> : null}
              <input type="text" placeholder="Email" name="email" value={email} onChange={authLoginEmail}/>
              {isSubmit && !email ?<span>Enter your Email</span> : null}
              <input type="password" placeholder="Password"  name="password" value={password} onChange={authLoginPass}/>
              {isSubmit && !password ?<span>Enter your Password</span> : null}
              {isSubmit && password.length <= 6 ?<span>Value should not be less than six characters</span> : null}
              <input type="password" placeholder="Confirm Password" name="password" value={conPass} onChange={authLoginConPass}/>
              {isSubmit && password !== conPass ?<span>Password do not match</span> : null}
              {isSubmit && conPass.length <= 6 ?<span>Value should not be less than six characters</span> : null}
              {isSubmit && !conPass ?<span>Enter your Confirm Password</span> : null}
              <input type="text" placeholder="Address" name="address" value={address} onChange={authLoginAddress}/> 
              {isSubmit && !address ?<span>Enter your Address</span> : null}
              <select name='gender' value={genders} onChange={authLoginGender}>
              <option >Gender</option>
                <option  genders="Male" >Male</option>
                <option  genders="Female" >Female</option>
              </select>
              {isSubmit && !genders ?<span>Enter your Gender</span> : null}
              <button type='submit' name="submit">SignUp</button> 
              <p>already signed up, <Link to="/login">SignIn</Link></p>
            </form>
          </div>
        </div>
       </div>
    </>
  )
}

export default Registration