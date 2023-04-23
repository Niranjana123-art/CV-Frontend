import React from 'react'
import './Landing.css'
// import Navbar from '../../components/Navbar/Navbar'

const Landing = () => {
  return (
    <div className='landing__container'>
      <div>
        <h1 >Let</h1>
        <h1 className='bold_header'>Recruiters </h1>
        <h1 className='bold_header'>Find <span className='dim_header'>You</span>!</h1>
      </div>
      <button className='landing__button'>
        Get Started
      </button>
    </div>
  )
}

export default Landing