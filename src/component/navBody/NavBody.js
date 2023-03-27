import React from 'react';
import "./navBody.css";
import { useContext, useEffect, useState, useRef } from "react";
import AuthContext from "../../context/AuthContext";
import axios from 'axios';
import ScreenAd from '../screenad/ScreenAd';
import jwt_decode from "jwt-decode";
import CoverDash from '../../pages/coverdash/CoverDash';
const NavBody = ({id, user, email, password, address, pin}) => {
    const {useAllOne, authUseAllOne} = useContext(AuthContext);
    const getValues = useRef(false);
    const token = window.localStorage.getItem('pin');
    const decoded =jwt_decode(token);
    const [localPin, setlocalPin] = useState(pin);
    //const queryparam = new URLSearchParams(costData);
    //axios.defaults.headers.common['Authorization'] = 'Bearer ' + JSON.parse(localStorage.getItem('pin'));
    const getUsers = async() =>{
      const res = await axios.get(`http://localhost/allApi/jwtapi/?name=getCustomerDetails&param=&customerId=${id}`,
        {headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('pin'))
        }
      })
           console.log(res.data[0]);
           authUseAllOne(res.data[0]);
    }
    useEffect(() => {
      if(getValues.current === false){
        getValues.current = true;      
      getUsers(); 
      }
      if(token){
        setlocalPin(JSON.parse(token))
       console.log(localPin);
      }
   },[])
   useEffect(() =>{
    window.localStorage.setItem('pin', JSON.stringify(localPin));
   });
  return (
    <div>
    <div className="Container">
    <div className="imgProfile">{id}</div>
     <div className='lowerItems'>
      <div className='fewItems'>Followers</div>
      <div className='fewItems'>View Ads</div>
      <div className='fewItems'>Delete Account</div>
      <div className='fewItems'>Carts</div>
     </div>
  </div>
   {/*useAllOne.map((item)=>{return <ScreenAd key={item.key.reply.custMessage.id} {...itemreply.custMessage}/>})*/}
   <div className="boxContainer">
    <div className="boxContainerMain">
    {useAllOne.map((items, lists)=>{
    return (<div key ={lists} className="smallBox">
      <div className='itemSmallBox'><div className='itemBoxCompany'>{items.company}</div><br/>
      <div className='itemBox'>{items.coin}</div><br/>
      <div className='itemBox'>{items.purchaseAmount}</div><br/>
      <div className='itemBox'>{items.phoneNumber}</div><br/>
      <div className='itemBoxBuy'>{items.service}</div></div>
      <div className="imageBox"></div>
    </div>)  } )}
    </div>
    <div className="scrollSmallBox"></div>
</div>
   </div>
  )
}

export default NavBody