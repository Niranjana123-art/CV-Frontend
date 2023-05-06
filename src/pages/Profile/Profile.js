import React from 'react'
import './Profile.css'
import back from "../../assets/Profile_Background.jpeg"
import pic from "../../assets/Profile_Pic2.jpeg"

const Profile = () => {
  return (
    <div className='Profile_Container'>
       <div className='Profile_Content'>
            <div className='Profile_background'>
                <img src={back} alt=''/>
            </div>
            <div className='Profile_All'>
                <div className='Profile_Details'>
                      <h1>Candidate Name</h1>
                      <h2>City,State</h2>
                      <h3>Job Role/Education</h3>
                </div>

                <div className='Profile_pic'>
                    <img src={pic} alt=''/>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Profile
