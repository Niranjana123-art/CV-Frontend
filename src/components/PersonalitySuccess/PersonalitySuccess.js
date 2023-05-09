import React from 'react'
import { createPortal } from 'react-dom'
import './PersonalitySuccess.css'
import SvgImage from  '../../assets/bgmodal.svg'
const PersonalitySuccess = ({open,setOpen}) => {
 if (!open){
    return null
 }
 
  return createPortal(
    <div className='PersonalitySuccess_Container'>
     
    <div className='PersonalitySuccess_Content' style={{ backgroundImage: `url(${SvgImage})` }}>
         <div className='PersonalitySuccess_Text'>
           Personality Test <br/>Submitted <span style={{color:'green'}}>Successfully!</span>
         </div>
           <div>
           <button onClick={()=> setOpen(false)} className='PersonalitySuccess_button'>Attend Aptitude Test</button>
           </div>
    </div>
  </div>,
  document.getElementById('portal')
  )
 
}

export default PersonalitySuccess