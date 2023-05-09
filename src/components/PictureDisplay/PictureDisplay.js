import React,{useState,useEffect} from 'react'
import './PictureDisplay.css'
import { baseUrl } from '../../utils/Urls'
import axiosInstance from '../../auth/authHandler'
import { useLocation } from 'react-router-dom'

//import { useNavigate } from 'react-router-dom'


const PictureDisplay = ({id}) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const idval = params.get('id');
    // const phoneNo = params.get('phoneno');
    const [image,setImage] = useState();
    // const navigate = useNavigate();
    useEffect(() => {
        axiosInstance.get(`${baseUrl}/resume-analyze/${idval}`)
        .then(response => {
              console.log(response.data)
              const data = response.data.img;
        // if (data.id == idval && data.img[0]) {}
          setImage(data);
        
          
      })
        .catch(error =>{console.log(error)});
      }, [id]);
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

export default PictureDisplay;