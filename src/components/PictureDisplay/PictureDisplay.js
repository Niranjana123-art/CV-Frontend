import React,{useState,useEffect} from 'react'
import './PictureDisplay.css'
import { baseUrl } from '../../utils/Urls'
import axiosInstance from '../../auth/authHandler'

//import { useNavigate } from 'react-router-dom'


const PictureDisplay = ({img}) => {
    const [image,setImage] = useState();
    // const navigate = useNavigate();
    useEffect(() => {
        axiosInstance.get(`${baseUrl}/resume-analyze`)
          .then(response => {
                const data =response.data;
                if (data.length>0 && data[0].img){
                    setImage(data[0].img);
                }
          })
          .catch(error => console.error(error));
      }, [img]);
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