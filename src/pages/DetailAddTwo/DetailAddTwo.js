import React,{useEffect,useState}  from 'react';
import './DetailAddTwo.css';
import { baseUrl } from '../../utils/Urls'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast"; 
import axiosInstance from '../../auth/authHandler'


import {FaPhoneSquareAlt} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"


const DetailAddTwo = () => {
  const navigate = useNavigate();
  const [phoneNo, setPhoneNo] = useState('');
  const [emailId, setEmailId] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
  formData.append('PhoneNo', phoneNo);
  formData.append('EmailID', emailId);
  formData.append('LinkedIn', linkedIn);
  formData.append('ResumeFile', resume);

  axiosInstance.post(`${baseUrl}/applicant-details-register/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .then((response) => {
    if(response.status===201){
      toast.success("Message sent successfully!!!")
        navigate("/resume-upload")
      }
  })
  .catch((error) => {
    console.log(error);
  });
  };

  return (
    <div className='DetailAddTwo_Container'>
         
         <div className='DetailAddTwo_Box'>
           
           <div className='DetailAddTwo_Content'>
             
              <div className='Additional_info'>
              
                  <div className='Additional_info_heading'>
                    <h3>Additional Information</h3>
                  </div>

                  <div className='Additonal_info_content'>
                          <form encType="multipart/form-data" onSubmit={handleSubmit}>
                            <div className='label_detail2'>
                              <div className='text_detail2'>
                                  <label><FaPhoneSquareAlt size={30} color='black'style={{marginRight: '10px'}}/>Phone No:
                                  <input type='text' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                                  </label>
                              </div>
                              <div className='email_detail2'>
                                  <label><FaEnvelope size={30} color='black' style={{marginRight: '10px'}}/>E-mail Id: 
                                  <input type='text' value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                                  </label>
                             </div>
                                  <label><FaLinkedin size={30}  color='black' style={{marginRight: '10px'}}/>LinkedIn Profile:
                                  <input type='text' value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
                                  </label>
                                  <div className="upload-btn-wrapper">
                                    <button className="btn">UPLOAD RESUME 
                                    <input type="file" name="myfile" onChange={(e) => setResume(e.target.files[0])} />
                                    </button>
                                  </div>
                                  
                              </div>
                              <button className ='Button_Submit' type='Submit'> SUBMIT</button>
                            
                          </form>
                          

                  </div>
         </div>
     </div>
  </div>
  </div> 
  );
};


export default DetailAddTwo