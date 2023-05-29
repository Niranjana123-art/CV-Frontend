import "./AptitudeScore.css"
import {FiBookOpen} from "react-icons/fi";
import {FaAddressCard} from "react-icons/fa";
import {BsPersonCircle} from "react-icons/bs";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../utils/Urls';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../auth/authHandler';

const AptitudeScore = () => {
  const [score, setScore] = useState(null);
  const navigate=useNavigate();
  
  
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
                <div className='AptitudeScore_Header'>
                   <FiBookOpen size={50}/>
                   <h2>What We Received From You</h2>
                </div>
                <div className='AptitudeScore_CandidateScore'>
                     <h2>Aptitude Test Score</h2>
                     <h2>You Scored {score} out of 5.</h2>
                </div>
                <div className='AptitudeScore_Button'>
                     <button onClick={() => {navigate("/profile");}} type="submit">FINISH</button>
                </div>
            </div>
    </div>
  )
}

export default AptitudeScore
