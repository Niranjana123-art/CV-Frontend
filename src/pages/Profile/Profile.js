import React from 'react'
import './Profile.css'
import back from "../../assets/Profile_Background.jpeg"
import pic from "../../assets/Profile_Pic2.jpeg"

const Profile = () => {
  return (
    <div className='Profile_Container'>
        <div className='Profile_Navbar'></div>
       
       <div className='Profile_Content'>

       <div className='Profile_background'>
           <img src={back} alt=''/>
       </div>

       <div className='Profile_Details'>
            <h1>Sona Rose Martin</h1>
            <h2>Mumbai,Maharashtra</h2>
            <h3>UI/UX Designer</h3>
       </div>

       <div className='Profile_pic'>
          <img src={pic} alt=''/>
       </div>

       

      </div>
       
    </div>
  )
}

export default Profile
