import React, {useEffect, useState} from 'react'
import axiosInstance from '../../auth/authHandler';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../utils/Urls';
import './ResumeUploadSuccess.css'
const ResumeUploadSuccess = () => {
  const navigate = useNavigate();
  const [idval,setId] = useState('');
  useEffect(() => {
    // Fetch the related user object and set the user id state
    axiosInstance.get(`${baseUrl}/current-user/`)
      .then(response => {
        setId(response.data.id);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const handleButtonClick = () => {
    navigate(`/personalityq?id=${idval}`);
  }
  return (
    <div className='resume__container'>
        <div className='resume__contents'>
        <h2>Resume Uploaded Successfully!</h2>
        <button onClick={handleButtonClick}>Attend Personality Test</button> 
        </div>
    </div>
  )
}

export default ResumeUploadSuccess