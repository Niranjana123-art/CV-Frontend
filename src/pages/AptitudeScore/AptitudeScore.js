import "./AptitudeScore.css"
import {FiBookOpen} from "react-icons/fi";
import {FaAddressCard} from "react-icons/fa";
import {BsPersonCircle} from "react-icons/bs";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../utils/Urls';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../auth/authHandler';
import {FaUserCircle} from "react-icons/fa";
// import { LuBookOpen } from "react-icons/lu";
import { IconContext } from 'react-icons/lib';

const AptitudeScore = () => {
  const [score, setScore] = useState(null);
  const[idval,setId] = useState('');
  const[location,setLocation] = useState();
  const[name,setName] = useState();
  const navigate=useNavigate();
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
  
  useEffect(() => {
    // make a GET request to the backend to retrieve candidate details
    axiosInstance.get(`${baseUrl}/detail-add/${idval}`)
      .then(response => {
        setLocation(response.data.location);
        setName(response.data.name);

        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [idval]);
  
  useEffect(() => {
    fetchScore();
  }, []);

  const fetchScore = async () => {
    try {

      const response = await axios.get(`${baseUrl}/training/score`);
      const scoreData = response.data.score;
      setScore(scoreData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='AptitudeScore_Container'>
            <div className='AptitudeScore_Box'>
            <IconContext.Provider value={{ className: "book-icon"}}>  
              {/* <LuBookOpen/> */}
            </IconContext.Provider>  
                <p className='line__content'>What we received from you</p>
                <IconContext.Provider value={{ className: "user-icon"}}>
                  <FaUserCircle />
                </IconContext.Provider>
                <div>
                    <p className='detail__contents'>{name}</p>
                    <p className='location__content'>{location}</p>
                </div>
                <div className='AptitudeScore_CandidateScore'>
                     <h2>Aptitude Test Score</h2>
                     <h2>You Scored {score} out of 5.</h2>
                </div>
                <div className='AptitudeScore_Button'>
                     <button onClick={() => {navigate(`/profile?id=${idval}`);}} type="submit">FINISH</button>
                </div>
            </div>
    </div>
  )
}

export default AptitudeScore
