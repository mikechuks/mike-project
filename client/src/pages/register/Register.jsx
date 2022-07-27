
import { useRef } from "react";
import "./register.css";
import {useHistory} from "react-router"
import { Link } from "react-router-dom";
import axios from "axios";
export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async(e)=>{
        e.preventDefault();
       if(passwordAgain.current.value !== password.current.value){
         passwordAgain.current.setCustomValidity("Password do not Match");
       }else{
         const user = {
             username: username.current.value,
             email: email.current.value,
             password: password.current.value
         }
         try{
         await axios.post("/auth/register", user);
         history.push("/login")
         }catch(err){
           console.log(err)
         }
       }
    };
  return (
      <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Mike`s Project</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Mike`s Project
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                <input placeholder="Username" className="loginInput" ref={username} required/>
                <input placeholder="Email" className="loginInput" ref={email} required type="email"/>
                    <input placeholder="Password" className="loginInput" ref={password} required type="password"/>
                    <input placeholder="Confirm Password" className="loginInput" ref={passwordAgain} required type="password"/>
                    <button className="loginButton" type="submit">Sign Up</button>
                    <Link to={`/login`}><button className="loginRegisterButton">Log into Account</button></Link>
                </form>
            </div>
        </div>
      </div>
  )
}