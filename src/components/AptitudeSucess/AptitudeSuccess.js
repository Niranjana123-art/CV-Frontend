import "./AptitudeSuccess.css"
import React from 'react'

const AptitudeSuccess = () => {
  return (
    <div className='AptitudeSuccess_Container'> 
      <div className='AptitudeSuccess_Content'>
           <div className='AptitudeSuccess_Text'>
             <p>Aptitude Test Submitted Successfully!</p>
           </div>
             <div>
             <button className='AptitudeSuccess_button'>View Score</button>
             </div>
      </div>
    </div>
  )
}

export default AptitudeSuccess
