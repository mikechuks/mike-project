import Profilenavbar from "../../component/profilenavbar/Profilenavbar";
import "./profile.css";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import NavBody from "../../component/navBody/NavBody";

const Profile = ({id}) => {
  const {useAll} = useContext(AuthContext);
   /*const[fix, setFix] = useState(false);
     
    const setFixed = () => {
        if(window.scrollY >= 100 ){
          setFix(true)
        }else{
          setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)*/
  return (
    <>
  <div className="allContainer">
    <Profilenavbar/>
    {useAll.map((item)=>{return <NavBody key={item.id} {...item}/>})}
  </div>
  </>
  )
}

export default Profile