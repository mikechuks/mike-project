import React from 'react'
import CreateAd from '../../component/createAd/CreateAd'
import Navbar from '../../component/navbar/Navbar'
import Profilenavbar from '../../component/profilenavbar/Profilenavbar'
const Edit = () => {
  return (
    <div>
      <Profilenavbar/>
      {<CreateAd/>}
    </div>
  )
}

export default Edit