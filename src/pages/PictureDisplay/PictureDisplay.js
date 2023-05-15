import React,{useState,useEffect} from 'react'
import './PictureDisplay.css'
import { baseUrl } from '../../utils/Urls'
import axiosInstance from '../../auth/authHandler'
import { useLocation } from 'react-router-dom'

//import { useNavigate } from 'react-router-dom'


const PictureDisplay = ({mailid, phoneno}) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const email = params.get('mailid');
    const phoneNo = params.get('phoneno');
    const [image,setImage] = useState();
    // const navigate = useNavigate();
    useEffect(() => {
        axiosInstance.get(`${baseUrl}/resume-analyze/`)
          .then(response => {
                const data =response.data;
                const filteredData = data.filter(item => (
                    item.mailid === email && item.phoneno === phoneNo
                  ));
                  console.log(filteredData);
                  if (filteredData.length > 0 && filteredData[0].img){
                      setImage(filteredData[0].img);
                  }
          })
          .catch(error => console.error(error));
      }, [mailid, phoneno]);
      if (!image) {
        return <div>Loading...</div>;
      }
      const fullUrl = `${baseUrl}${image}`;
      return(
        <div className='picture_display__container'>
            <h1>Pie Chart Generated Based on Your Resume</h1>
            <div className='picture__content'>
            <img src={fullUrl} alt="Pie Chart" />
            </div>
        </div>
      ) 
}

export default PictureDisplay