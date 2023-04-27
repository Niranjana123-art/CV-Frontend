import React from 'react'
import './PersonalityScore.css'
import {FaBookOpen} from "react-icons/fa";
import {FaUserCircle} from "react-icons/fa";
import Rating from '../../components/Rating/Rating';

const PersonalityScore = () => {
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
                        width: '400px',
                        opacity:'0.2',
                        marginBottom:'10px',
                        marginTop:'10px',
                        }}
                     />
                <h2>Openness
                  <Rating/>
                  </h2>
                     <hr
                        style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '1px',
                        width: '400px',
                        opacity:'0.2',
                        marginBottom:'10px',
                        marginTop:'10px',
                        }}
                     />
                     
                     <h2>Conscientiousness <Rating/></h2>
                     
                     <hr
                        style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '1px',
                        width: '400px',
                        opacity:'0.2',
                        marginBottom:'10px',
                        marginTop:'10px',
                        }}
                     />
                     
                     <h2>Extraversion <Rating/></h2>
                    
                     <hr
                        style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '1px',
                        width: '400px',
                        opacity:'0.2',
                        marginBottom:'10px',
                        marginTop:'10px',
                        }}
                     />
                     
                     <h2>Agreeableness <Rating/></h2>
                     
                     <hr
                        style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '1px',
                        width: '400px',
                        opacity:'0.2',
                        marginBottom:'10px',
                        marginTop:'10px',
                        }}
                     />
                     
                     <h2>Neuroticism <Rating/></h2>
                     
                     <hr
                        style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '1px',
                        width: '400px',
                        opacity:'0.2',
                        marginBottom:'10px',
                        marginTop:'10px',
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