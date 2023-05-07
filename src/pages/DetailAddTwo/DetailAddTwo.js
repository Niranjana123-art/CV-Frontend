import React  from 'react';
import './DetailAddTwo.css';
import {FaPhoneSquareAlt} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
// import { useNavigate } from 'react-router-dom';
// import { baseUrl } from '../../utils/Urls';


const DetailAddTwo = () => {
  return (
    <div className='DetailAddTwo_Container'>
         
         <div className='DetailAddTwo_Box'>
           
           <div className='DetailAddTwo_Content'>
             
              <div className='Additional_info'>
              
              <div className='Additional_info_heading'>
              <h3>Additional Information</h3></div>

              <div className='Additonal_info_content'>
              <form>
                 <label><FaPhoneSquareAlt size={30} color='black'/>Phone No:<input type='PhoneNo'/></label>
                 <label><FaEnvelope size={30} color='black'/>E-mail Id: <input type='EmailId'/></label>
                 <label><FaLinkedin size={30}  color='black'/>LinkedIn Profile:<input type='LinkedIn'/></label>
              </form>
              </div>

              </div>

              <div className='UploadResume'>
                
                <div className='UploadResume_heading'>
                <h3>Upload Resume</h3></div>

                <div className='UploadResume_content'>
                <input type="file" id="files" class="hidden"/>

                  <button className ='Button_Submit' type='Submit'> SUBMIT</button>
                </div>

              </div>

            </div>
         </div>
    </div>
  )
}

export default DetailAddTwo
