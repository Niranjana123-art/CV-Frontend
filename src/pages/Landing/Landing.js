import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import './Landing.css'
import landing from '../../assets/landing.svg'

const Landing = () => {
  const navigate=useNavigate();
  return (
    <>
     <Navbar/>
    <div className='landing__container'>
    {/* <img src="../../assets/vector.png" /> */}
      <div className='landing__content'>
      <div>
        <h1 >Let</h1>
        <h1 className='bold_header'>Recruiters </h1>
        <h1 className='bold_header'>Find <span className='dim_header'>You</span>!</h1>
      </div>
      <button className='landing__button' onClick={()=>{
              navigate('/detail-add1')
            }}>
        Get Started
      </button>
      </div>
      <div className='landing__image'>
        <img src={landing}></img>
      </div>
    </div>
    </>
  )
}

export default Landing