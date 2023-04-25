import React from 'react'
import './PersonalityScore.css'
import {FaBookOpen} from "react-icons/fa";
import {FaUserCircle} from "react-icons/fa";

const PersonalityScore = () => {
  return (
    <div className='personality-score__container'>
            <h1>Personality Test Score</h1>
            <div className='score__contents'>
                <FaBookOpen border='black' color='white' size='30px'/>
                <p className='quote__content'>What we received from you</p>
                <FaUserCircle size='4rem' color='#1d222b' />
                <div className='detail__contents'>
                    <p>Nandini P</p>
                    <p className='location__content'>Kerala,India</p>
                </div>
                <div className='PersonalityTest__score'>
                <hr
                        style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '1px',
                        width: '400px',
                        opacity:'0.2',
                        marginBottom:'6px',
                        marginTop:'6px',
                        }}
                     />
                <h2>Openness</h2>
                     <hr
                        style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '1px',
                        width: '400px',
                        opacity:'0.2',
                        marginBottom:'6px',
                        marginTop:'6px',
                        }}
                     />
                     <h2>Conscientiousness</h2>
                     <hr
                        style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '1px',
                        width: '400px',
                        opacity:'0.2',
                        marginBottom:'6px',
                        marginTop:'6px',
                        }}
                     />
                     <h2>Extraversion</h2>
                     <hr
                        style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '1px',
                        width: '400px',
                        opacity:'0.2',
                        marginBottom:'6px',
                        marginTop:'6px',
                        }}
                     />
                     <h2>Agreeableness</h2>
                     <hr
                        style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '1px',
                        width: '400px',
                        opacity:'0.2',
                        marginBottom:'6px',
                        marginTop:'6px',
                        }}
                     />
                     <h2>Neuroticism</h2>
                     <hr
                        style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '1px',
                        width: '400px',
                        opacity:'0.2',
                        marginBottom:'6px',
                        marginTop:'6px',
                        }}
                     />
                </div>
                <button>
                   Finish
                </button>
            </div>
    </div>
  )
}

export default PersonalityScore