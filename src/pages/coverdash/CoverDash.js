import React from 'react'
import { Outlet } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
const CoverDash = () => {
    const [isLoading, setIsLoading] = useState(true);
    const token = localStorage.getItem('pin');
    const decode =jwt_decode(token);
    useEffect(() => {
        const verifyRefreshToken = async() =>{
            try{
                await decode;
            }catch(err){
                console.log(err);
            }
            finally{
                setIsLoading(false)  
            }
        }
        !token ? verifyRefreshToken() : setIsLoading(false);
   },[])
   useEffect(() =>{
    console.log(`isLoading: ${isLoading}`);
    console.log(decode);
  },[isLoading]);
  return (
    <>
    {isLoading
        ?<p>Loading....</p>
        : <Outlet/>
    }
    </>
  )
}

export default CoverDash