import AdCreated from "../adCreated/AdCreated";
import AuthContext from "../../context/AuthContext";
import "./createAd.css"
import { useContext, useState, useEffect } from "react";
import axios from "axios";

const CreateAd = () => {
  const {useAll, authUseAll, authLoginStart, userForm, password, conPass, email, address, genders, sold, coinname, 
    authLoginGender, authLoginPass, authLoginEmail, authLoginAddress, authLoginConPass,
    authLoginCoinName, authLoginSold,} = useContext(AuthContext);

    axios.defaults.headers.common['Authorization'] = 'Bearer ' + JSON.parse(localStorage.getItem('pin'));
    /*const [getPin, setGetPin] = useState([]);
    useEffect(() =>{
    const pin = JSON.parse(localStorage.getItem('pin'));
    if(pin) {
      setGetPin(pin);
    }
    },[]);*/

    const sendeditData = {
      name :"addCustomer",
      param :{
        coin: coinname,
        state: userForm,
        company: email,
        service: genders,
        purchaseAmont: sold,
        phoneNumber: password,
        coinImage: address,
     }};
    const editCall = async()=>{
      alert("coming Up Soon")
    try{
      //http://localhost/api/login.php
    await axios.post('http://localhost/allApi/jwtapi/', sendeditData).then((result)=>{
       if(result.data.status === "Invalid"){
       alert('Invalid User')}
       else{
         console.log(sendeditData);
         console.log(result.data);
         authUseAll(result.data.resonse.result);
       } 
    
     })}
    catch(err){
    console.log("info not avaliable")
    }};
  const editHandler = (e) => {
    e.preventDefault();
    /*
    if(userForm && conPass){
      setValid(true);
    }
    setIsSubmit(true);*/
    editCall()
  }
  return (
    <div>
    <div className="inputBoxAd">
      <AdCreated/>
      <div className="inputAd">
    <form onSubmit={editHandler}>
              <select name="coinname" value={coinname} onChange={authLoginCoinName}>
              <option >Coin Name</option>
                <option coinname ="Bitcoin">Bitcoin</option>
                <option coinname ="Etheruem">Etheruem</option>
              </select>
        <input type="text" placeholder="State"  name="state" value={userForm} onChange={authLoginStart}/>
    <input type="text" placeholder="Company Name"  name="Company Name" value={email} onChange={authLoginEmail}/>
    <select name="typeSever" value={genders} onChange={authLoginGender}>
              <option >Type of service</option>
                <option genders ="Buy">Buy</option>
                <option genders ="Sell" >Sell</option>
              </select>
     <select name="typeSever" value={sold} onChange={authLoginSold}>
              <option >Minimum Amount to Purchased or Sold</option>
                <option sold="ten">$10</option>
                <option sold="twenty">$20</option>
     </select>
     <input type="text" placeholder="Phone Number"  name="Phone Number" value={password} onChange={authLoginPass}/>
     <select name="typeSever" value={conPass} onChange={authLoginConPass}>
              <option >Coin Image</option>
                <option conPass ="Bitcion">Bitcion</option>
                <option conPass ="Etheruem" >Etheruem</option>
              </select>
     <textarea value={address} onChange={authLoginAddress}></textarea> <br/><br/>
     <button type='submit' name="submit">SignUp</button> 
     </form>
      </div>
      </div>
    </div>
  )
}

export default CreateAd