import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import './Landing.css'


const Landing = () => {
  const navigate=useNavigate();
  return (
    <>
     <Navbar/>
    <div className='landing__container'>
    {/* <img src="../../assets/vector.png" /> */}

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
    </>
  )
}

export default Landing