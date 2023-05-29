import React,{ useEffect,useState} from 'react'
import { createPortal } from 'react-dom'
import axiosInstance from '../../auth/authHandler'
import { baseUrl } from '../../utils/Urls'
import './AptitudeSuccess.css'
import SvgImage from  '../../assets/bgmodal.svg'
import { useNavigate } from 'react-router-dom';

const  AptitudeSuccess = ({open,setOpen}) => {
  const[idval,setId] = useState('');
//  if (!open){
//     return null
//  }
  const navigate=useNavigate();
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
  
  return createPortal(
    <div className='AptitudeSuccess_Container'>
     
    <div className='AptitudeSuccess_Content' style={{ backgroundImage: `url(${SvgImage})` }}>
         <div className='AptitudeSuccess_Text'>
           Aptitude Test <br/>Submitted <span style={{color:'green'}}>Successfully!</span>
         </div>
           <div>
           <button onClick={() => {
             navigate(`/aptitude-score?id=${idval}`);
            }} className='AptitudeSuccess_button'>View Score</button>
           </div>
    </div>
  </div>,
  document.getElementById('portal')
  )
 
}

export default AptitudeSuccess