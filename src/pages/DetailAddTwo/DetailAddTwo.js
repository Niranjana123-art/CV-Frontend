import React  from 'react';
import './DetailAddTwo.css';


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
                 <label>Phone No:<input type='PhoneNo'/></label>
                 <label>E-mail Id: <input type='EmailId'/></label>
                 <label>LinkedIn Profile:<input type='LinkedIn'/></label>
              </form>
              </div>

              </div>

              <div className='UploadResume'>
                
                <div className='UploadResume_heading'>
                <h3>Upload Resume</h3></div>

                <div className='UploadResume_content'>
                  <button className ='Button_UploadResume' type='UploadResume'>+ Upload Resume</button>
                  <button className ='Button_Submit' type='Submit'> SUBMIT</button>
                </div>

              </div>

            </div>
         </div>
    </div>
  )
}

export default DetailAddTwo
