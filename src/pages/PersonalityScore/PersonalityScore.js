import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../utils/Urls';
import axiosInstance from '../../auth/authHandler';
import './PersonalityScore.css'
import {FaBookOpen} from "react-icons/fa";
import {FaUserCircle} from "react-icons/fa";

const PersonalityScore = () => {
   const[idval,setId] = useState('');
  const navigate = useNavigate();
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
  const handleChange = () => {
   navigate(`/aptitudeq?id=${idval}`);
  }
  return (
    <div className='personality-score__container'>
            <div className='heading__content'><h1>Personality Test Score</h1></div>
            <div className='score__contents'>
                <FaBookOpen border='black' color='white' size='2.1rem'/>
                <p className='line__content'>What we received from you</p>
                <FaUserCircle size='4rem' color='#1d222b' />
                <div className='detail__contents'>
                    <p>Niranjana B Nair</p>
                    <p className='location__content'>Kerala,India</p>
                </div>
                <div className='PersonalityTest__score'>
                <hr
                        style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '1px',
                        width: '50rem',
                        opacity:'0.2',
                        marginBottom:'10px',
                        marginTop:'10px',
                        }}
                     />
                  <div className='result__display'>
                     You are a <span className='label__display'> dependable </span> person
                  </div>
                </div>
                <button onClick={handleChange}>
                   Try Aptitude Test
                </button>
            </div>
    </div>
  )
}

export default PersonalityScore