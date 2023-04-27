import React from 'react'
import "./AptitudeScore.css"
import {FaBookOpen} from "react-icons/fa";
import {FaAddressCard} from "react-icons/fa";

const AptitudeScore = () => {
  return (
    <div className='AptitudeScore_Container'>
            <div className='AptitudeScore_Box'>
                <div className='AptitudeScore_Header'>
                   <FaBookOpen size={50}/>
                   <h2>What We Received From You</h2>
                </div>
                <div className='AptitudeScore_CandidateDetails'>
                    <FaAddressCard size={100}/>
                    <h1>Candidate Name</h1>
                    <h2>City,State</h2>
                </div>
                <div className='AptitudeScore_CandidateScore'>
                <h2>Maths</h2>
                     <hr
                        style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '1px',
                        width: '400px',
                        }}
                     />
                     <h2>English</h2>
                     <hr
                        style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '1px',
                        width: '400px',
                        }}
                     />
                </div>
                <div className='AptitudeScore_Button'>
                     <button type="submit">FINISH</button>
                </div>
            </div>
    </div>
  )
}

export default AptitudeScore
