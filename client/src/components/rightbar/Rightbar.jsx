import Online from "../online/Online";
import "./rightbar.css";
import {Users} from "../../dummyData";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CakeIcon from '@mui/icons-material/Cake';
import axios from "axios"

export default function Rightbar({user}) {
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const [friends, setFriends] = useState([])
const {user:currentUser, dispatch} = useContext(AuthContext);
const [followed, setFollowed] = useState(currentUser.following.includes(user?.id));

useEffect(() =>{
   setFollowed(currentUser.following.includes(user?.id));
},[currentUser, user])

useEffect(()=>{
const getFriends = async ()=>{
  try{
    const friendList = await axios.get("/user/friends/"+user._id)
    setFriends(friendList.data);
  }catch(err){
    console.log(err)
  }
};
getFriends();
},[user]);

const handleClick = async()=>{
  try{
   if(followed){
     await axios.put("/user/"+user._id+"/unfollow", {userId:currentUser._id});
     dispatch({type:"UNFOLLOW", payload:user._id})
   }else{
    await axios.put("/user/"+user._id+"/follow", {userId:currentUser._id});
    dispatch({type:"FOLLOW", payload:user._id})   
   }
  }catch{
    console.log()
  }
  setFollowed(!followed)
}
  const HomeRightbar = () =>{
    return(
      <>
                 <div className="birthdayContainer">
              <CakeIcon className="birthdayImg"/>
              <span className="birthdayText">
                <b>Pola Foster</b> and <b>3 other friends</b> have a birthday
              </span>
            </div>
            <img src="" alt="" className="rightbarAd" />
            <h4 className="rightbarTitle"></h4>
            <ul className="rightbarFriendList">
               {Users.map((u)=>(
                 <Online key={u.id} user={u}/>
               ))}
            </ul>
      </>
    )
  }
  const ProfileRightbar = () =>{
   return(
   <>
   {user.username !== currentUser.username && (
     <button className="rightbarFollowBouuton" onClick={handleClick}>
       {followed ? "Unfollowed" : "Follow"}
       {followed ? <RemoveIcon/> : <AddIcon/>}
       </button>
   )}
   <h4 className="rightbarTitle">User Information</h4>
   <div className="rightbarInfo">
     <div className="rightbarInfoItem">
       <span className="rightbarInfoKey">City:</span>
       <span className="rightbarInfoValue">{user.city}</span>
     </div>
     <div className="rightbarInfoItem">
       <span className="rightbarInfoKey">From:</span>
       <span className="rightbarInfoValue">{user.from}</span>
     </div>
     <div className="rightbarInfoItem">
       <span className="rightbarInfoKey">Relationship:</span>
       <span className="rightbarInfoValue">{user.relatonship  === 1 ? "Single" : user.relatonship  === 1 ? "Married" : "....."}</span>
     </div>
   </div>
   <h4 className="rightbarTitle">User Information</h4>
   <div className="rightbarFollowings">
     {friends.map((friend)=>(
      <Link to={"/profile/"+friend.username} style={{textDecoration:"none"}}>
   <div className="rightbarFollowing">
     <img src={friend.profilePicture ? PF+friend.profilePicture : PF+"personIcon.png"} alt="" className="rightbarFollowingImg" />
     <span className="rightbarFollowingName">{friend.username}</span> 
   </div>
   </Link>
    ))}
   </div>
   </>
   )
  }
  return (
      <div className="rightbar">
          <div className="rightbarWrapper">
{user ?  <ProfileRightbar/> : <HomeRightbar/>}
          </div>
      </div>
  )
}