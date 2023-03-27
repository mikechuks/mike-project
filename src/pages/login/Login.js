import Navbar from "../../component/navbar/Navbar";
import "./login.css";
import AuthContext from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginCall } from "../../apiCalls";
import axios from "axios";

const Login = () => {
  const {useAll, authUseAll, authLoginSuccess, authLoginStart, userForm, conPass, authLoginConPass, dispatch} = useContext(AuthContext);
  const [isSubmit, setIsSubmit] = useState(false);
  const [valid, setValid] = useState(false);
  let history = useNavigate();
  /*const getUsers = () =>{
    axios.get("http://localhost/api/auth.php").then(res => {
      console.log(res.data);
      authUseAll(res.data);
  })};
  useEffect(() =>{
    getUsers()
 },[]);*/
 const sendloginData = {
  name :"generate",
  param :{
    email: userForm,
    pass: conPass
 }
}
/*
 const sendloginData = {
  userlogin: userForm,
  passlogin: conPass,
}*/
  const onLoginHandler = (e) => {
    e.preventDefault();
    if(userForm && conPass){
      setValid(true);
    }
    setIsSubmit(true);
    loginCall(sendloginData, authUseAll);
    history('/profile');
  }
  return (
    <>
      <Navbar/>
       <div className="login">
        <div className="login-content">
          <div className="login-logo">Logo{/*useAll.map((useme, key)=>
                                        <div key={key}>
                                          <div>{useme.user}</div>
  </div>)*/}</div>
          <div className="login-form">
            <form onSubmit={onLoginHandler}>
              <input type="text" value={userForm} onChange={authLoginStart}/>
              {isSubmit && !userForm ?<span>Enter your Username</span> : null}
              <input type="password" value={conPass } onChange={authLoginConPass}/>
              {isSubmit && !conPass ?<span>Enter your Password</span> : null}
              {isSubmit && conPass.length <= 6 ?<span>Value should not be less than six characters</span> : null}
              {isSubmit && valid ?<Link to=" "><button>Login</button></Link> : <button>Login</button>}
              <p>not a user, <Link to="/register">SignUp</Link></p>
              <p>Forgotten Password</p>
            </form>
          </div>
        </div>
       </div>
    </>
  )
}

export default Login