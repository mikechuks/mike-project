import axios from "axios";

export const loginCall = async(userCredentials, useFunction) =>{
    alert("coming Up Soon")
  try{
    //http://localhost/api/login.php
  await axios.post('http://localhost/allApi/jwtapi/', userCredentials).then((result)=>{
     if(result.data.status === "Invalid"){
     alert('Invalid User')}
     else{
        useFunction(result.data);
        console.log(result.data);
       /*console.log(sendloginData);
       console.log(result.data);
       authUseAll(result.data);
       history('/profile');*/
     } 
  
   })}
  catch(err){
  console.log("info not avaliable")
  }};
