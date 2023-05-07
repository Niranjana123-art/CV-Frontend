import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../utils/Urls';
import './Profile.css'
import back from "../../assets/Profile_Background.jpeg"
import pic from "../../assets/Profile_Pic2.jpeg"
import axiosInstance from '../../auth/authHandler'

// const Profile = () => {
//   return (
//     <div className='Profile_Container'>
//        <div className='Profile_Content'>
//             <div className='Profile_background'>
//                 <img src={back} alt=''/>
//             </div>
//             <div className='Profile_All'>
//                 <div className='Profile_Details'>
//                       <h1>Candidate Name</h1>
//                       <h2>City,State</h2>
//                 </div>

//                 <div className='Profile_pic'>
//                     <img src={pic} alt=''/>
//                 </div>
//             </div>
//       </div>
//     </div>
//   )
// }


const Profile = () => {
  // const [candidateDetails, setCandidateDetails] = useState(null);
  const [userid, setUserId] = useState(null);
  const [idval, setId] = useState('');
  
  // const [name1, setName] = useState();
  const [location1, setLocation] = useState();

  useEffect(() => {
    // Fetch the related user object and set the user id state
    axiosInstance.get(`${baseUrl}/current-user/`)
      .then(response => {
        setUserId(response.data.username);
        setId(response.data.id);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // make a GET request to the backend to retrieve candidate details
    axiosInstance.get(`${baseUrl}/detail-add/${idval}`)
      .then(response => {
        setLocation(response.data.location);

        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [idval]);

  

  return (
    <div className='Profile_Container'>
      <div className='Profile_Content'>
        <div className='Profile_background'>
          <img src={back} alt=''/>
        </div>
        <div className='Profile_All'>
             
            <div className='Profile_Details'>
              <h1>{userid}</h1>
              <h2>{location1}</h2>
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
