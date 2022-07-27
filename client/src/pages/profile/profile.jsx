import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import {useParams} from "react-router";
import axios from "axios";

export default function Home() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user,setUser] = useState({});
    const username = useParams().username;

    useEffect(()=>{
        const fetchUser = async()=>{
          const res = await axios.get(`/user?username=${username}`); 
          setUser(res.data)
         };
         fetchUser()
      },[username]);
    return(
    <>
       <Topbar/>
       <div className="profile">
       <Sidebar/>
       <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img src={user.coverPicture ? PF+user.coverPicture : PF+"images.jpeg"} alt="" className="profileCoverImg" />
            <img src={user.profilePicture ? PF+user.profilePicture : `${PF}mike.jpg`} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
        </div>
       <div className="profileRightBottom">
       <Feed username={username}/>
       <Rightbar user={user}/>
       </div> 
       </div>
       </div>
    </>
    )
}