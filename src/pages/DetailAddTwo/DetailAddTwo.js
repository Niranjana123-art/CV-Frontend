import React,{useEffect,useState}  from 'react';
import './DetailAddTwo.css';
import { baseUrl } from '../../utils/Urls'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast"; 
import axiosInstance from '../../auth/authHandler'

import {FaPhoneSquareAlt} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"


// const DetailAddTwo = () => {
//   return (
    // <div className='DetailAddTwo_Container'>
         
    //      <div className='DetailAddTwo_Box'>
           
    //        <div className='DetailAddTwo_Content'>
             
    //           <div className='Additional_info'>
              
    //           <div className='Additional_info_heading'>
    //           <h3>Additional Information</h3></div>

    //           <div className='Additonal_info_content'>
    //           <form>
    //              <label><FaPhoneSquareAlt size={30} color='black'/>Phone No:<input type='PhoneNo'/></label>
    //              <label><FaEnvelope size={30} color='black'/>E-mail Id: <input type='EmailId'/></label>
    //              <label><FaLinkedin size={30}  color='black'/>LinkedIn Profile:<input type='LinkedIn'/></label>
    //           </form>
    //           </div>

    //           </div>

    //           <div className='UploadResume'>
                
    //             <div className='UploadResume_heading'>
    //             <h3>Upload Resume</h3></div>

    //             <div className='UploadResume_content'>
    //             <input type="file" id="files" class="hidden"/>

    //               <button className ='Button_Submit' type='Submit'> SUBMIT</button>
    //             </div>

    //           </div>

    //         </div>
    //      </div>
    // </div>
//   )
// }


const DetailAddTwo = () => {
  const navigate = useNavigate();
  const [phoneNo, setPhoneNo] = useState('');
  const [emailId, setEmailId] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [resume, setResume] = useState(null);

  // useEffect(() => {
  //   // Fetch the related user object and set the user id state
  //   axiosInstance.get(`${baseUrl}/current-user/`)
  //     .then(response => {
  //       setUserId(response.data.username);
  //       setId(response.data.id);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

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
      //   window.location.reload();
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
                            <label><FaPhoneSquareAlt size={30} color='black'/>Phone No:
                            <input type='text' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                            </label>
                            <label><FaEnvelope size={30} color='black'/>E-mail Id: 
                            <input type='text' value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                            </label>
                            <label><FaLinkedin size={30}  color='black'/>LinkedIn Profile:
                            <input type='text' value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
                            </label>
                            <label>Resume:</label>
                            <input type='file' onChange={(e) => setResume(e.target.files[0])} />
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