import React from 'react'
import "./AptitudeScore.css"
import {FiBookOpen} from "react-icons/fi";
import {BsPersonCircle} from "react-icons/bs";

const AptitudeScore = () => {
  return (
    <div className='AptitudeScore_Container'>
            <div className='AptitudeScore_Box'>
                <div className='AptitudeScore_Header'>
                   <FiBookOpen size={50}/>
                   <h2>What We Received From You</h2>
                </div>
                <div className='AptitudeScore_CandidateDetails'>
                    <BsPersonCircle size={60}/>
                    <h1>Niranjana B Nair</h1>
                    <h2>Kerala,India</h2>
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
