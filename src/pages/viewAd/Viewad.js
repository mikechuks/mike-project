import "./viewad.css"
import Navbar from "../../component/navbar/Navbar"
import Profilenavbar from "../../component/profilenavbar/Profilenavbar"

const Viewad = () => {
  return (
    <div>
    <Profilenavbar/>
    <div className="ContainerBox">
    <div className="smallBox">
      <div className="imageBox"></div>
    </div>
    <div className="smallBox">
    <div className="imageBox"></div>
    </div>
    <div className="smallBox">
    <div className="imageBox"></div>
    </div>
    <div className="smallBox">
    <div className="imageBox"></div>
    </div>
    <div className="smallBox">
    <div className="imageBox"></div>
    </div>
    </div>
    </div>
  )
}

export default Viewad