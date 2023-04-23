import React from 'react'
import './Landing.css'
// import Navbar from '../../components/Navbar/Navbar'

const Landing = () => {
  return (
    <div className='Landing_container'>
      <div className='inner_contain'>
        <h1 >Let</h1>
        <h1 className='bold_header'>Recruiters </h1>
        <h1 className='bold_header'>Find <span className='dim_header'>You</span>!</h1>
      

      <button className='Landing_button'>
        Get Started
      </button>
      </div>
    </div>
  )
}

export default Landing