import React from 'react'
import Navbar from '../../component/navbar/Navbar';
import "./home.css";
import ScreenAd from '../../component/screenad/ScreenAd';
import Body from '../../component/body/Body';
import Fotter from '../../component/fotter/Fotter';

const Home = () => {
  return (
    <>
    <Navbar/>
    <ScreenAd/>
    <Body/>  
    <Fotter/>
    </>
  )
}

export default Home