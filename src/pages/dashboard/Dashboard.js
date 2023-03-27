import Navbar from "../../component/navbar/Navbar";
import ScreenAd from "../../component/screenad/ScreenAd";
import "./dashboard.css"

const dashboard = () => {/*
 window.onscroll = function(){myFunction()};
  function myFunction(){
    var goup = document.getElementById("myScroll").scrollTop;
    if(goup > 100){
      document.getElementById("box").className = "test";
    }else{
      document.getElementById("box").className = "";
    }
  }*/
  return (
    <>
  <div className="allContainer">
    <Navbar/>
  <div className="Container" id="myScroll">
    <h1 className="buyCoin">Buy your best coin from Logo</h1>
    <br/>
    <br/>
    <form>
    <input type="text" placeholder="Search" />
    </form>
  </div>
    <ScreenAd/>
  </div>
  </>
  )
}

export default dashboard