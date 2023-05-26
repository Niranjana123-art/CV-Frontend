import React, { useState, useEffect} from 'react'
import { createPortal } from 'react-dom'
import { baseUrl } from '../../utils/Urls'
import axiosInstance from '../../auth/authHandler'
import { useNavigate, useLocation } from 'react-router-dom'
import './PersonalitySuccess.css'
import SvgImage from  '../../assets/bgmodal.svg'
const PersonalitySuccess = ({open,setOpen}) => {
  const[idval,setId] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // Fetch the related user object and set the user id state
    axiosInstance.get(`${baseUrl}/current-user/`)
      .then(response => {
        setId(response.data.id);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
 if (!open){
    return null
 }
 const handleChange = () => {
  setOpen(false);
  const newPathname = location.pathname.replace('/personalityq', '');
  navigate(`${newPathname}/personality-score?id=${idval}`, {replace:true});
 };
 
  return createPortal(
    <div className='PersonalitySuccess_Container'>
     
    <div className='PersonalitySuccess_Content' style={{ backgroundImage: `url(${SvgImage})` }}>
         <div className='PersonalitySuccess_Text'>
           Personality Test <br/>Submitted <span style={{color:'green'}}>Successfully!</span>
         </div>
           <div>
           <button onClick={handleChange} className='PersonalitySuccess_button'>View Result</button>
           </div>
    </div>
  </div>,
  document.getElementById('portal')
  )
 
}

export default PersonalitySuccess