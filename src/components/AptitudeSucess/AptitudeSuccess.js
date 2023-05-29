import React from 'react'
import { createPortal } from 'react-dom'
import './AptitudeSuccess.css'
import SvgImage from  '../../assets/bgmodal.svg'
import { useNavigate } from 'react-router-dom';

const  AptitudeSuccess = ({open,setOpen}) => {
//  if (!open){
//     return null
//  }
  const navigate=useNavigate();
  
  return createPortal(
    <div className='AptitudeSuccess_Container'>
     
    <div className='AptitudeSuccess_Content' style={{ backgroundImage: `url(${SvgImage})` }}>
         <div className='AptitudeSuccess_Text'>
           Aptitude Test <br/>Submitted <span style={{color:'green'}}>Successfully!</span>
         </div>
           <div>
           <button onClick={() => {
             navigate("/aptitude-score");
            }} className='AptitudeSuccess_button'>View Score</button>
           </div>
    </div>
  </div>,
  document.getElementById('portal')
  )
 
}

export default AptitudeSuccess