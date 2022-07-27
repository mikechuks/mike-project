import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./share.css";
import PhotoIcon from '@mui/icons-material/Photo';
import TagIcon from '@mui/icons-material/Tag';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Link } from "react-router-dom";
import axios from "axios";

export default function Share() {
  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const[file, setFile] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    };
    /*
    if(file){
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName);
      newPost.img = fileName;
      try{
        await axios.post("/upload", data);
      }catch(err){
        console.log(err);
      }
    }*/
    try{
      await axios.post("/posts",newPost);
      window.location.reload()
    }catch(err){
      
    }
  }
  return (
      <div className="share">
       <div className="shareWrapper">
        <div className="shareTop">
        <img className="shareProfileImg" src={user.profilePicture ? PF+user.profilePicture : PF+"mike.jpg"} alt=""/>
         <input placeholder={"What's in your mind" + user.username  + "?"} className="shareInput" ref={desc} />
        </div>
        <hr className="shareHr"/>
        <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
                <label htmlFor="file" className="shareOption">
                  <PhotoIcon/>
                 <span className="shareOptionText">Photo  or video</span>
                 <input type="file" style={{display: "none"}} id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])} />
                </label>
                <div className="shareOption">
                  <TagIcon/>
                 <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                  <LocationOnIcon/>
                 <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                  <EmojiEmotionsIcon />
                 <span className="shareOptionText">Feeling</span>
                </div>
            </div>
            <button className="shareButton" type="submit">Share</button>
        </form>
       </div>
      </div>
  )
}