import React from 'react'
import './Profile.css'
import back from "../../assets/Profile_Background.jpeg"
import pic from "../../assets/Profile_Pic2.jpeg"
// import { baseUrl } from '../../utils/Urls'
// import axiosInstance from '../../auth/authHandler'
// import PictureDisplay from '../PictureDisplay/PictureDisplay'
import PictureDisplay from '../../components/PictureDisplay/PictureDisplay'

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
            <div>
              <PictureDisplay/>
            </div>
      </div>
    </div>
  )
}

export default Profile
