import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../utils/Urls';
import axiosInstance from '../../auth/authHandler';
import './PersonalityScore.css'
import {FaUserCircle} from "react-icons/fa";
// import { LuBookOpen } from "react-icons/lu";
import { IconContext } from 'react-icons/lib';

const PersonalityScore = () => {
   const[idval,setId] = useState('');
   const[location,setLocation] = useState();
   const[name,setName] = useState();
   const[label,setLabel] = useState();
  const navigate = useNavigate();
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
  useEffect(() => {
    // make a GET request to the backend to retrieve candidate details
    axiosInstance.get(`${baseUrl}/detail-add/${idval}`)
      .then(response => {
        setLocation(response.data.location);
        setName(response.data.name);

        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [idval]);
  useEffect(() => {
    // make a GET request to the backend to retrieve candidate details
    axiosInstance.get(`${baseUrl}/training/predict/${idval}`)
      .then(response => {
        setLabel(response.data.Label);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [idval]);
  const handleChange = () => {
   navigate(`/aptitudeq?id=${idval}`);
  }
  return (
    <div className='personality-score__container'>
            <div className='heading__content'><h1>Personality Test Score</h1></div>
            <div className='score__contents'>
            <IconContext.Provider value={{ className: "book-icon"}}>  
              {/* <LuBookOpen/> */}
            </IconContext.Provider>  
                <p className='line__content'>What we received from you</p>
                <IconContext.Provider value={{ className: "user-icon"}}>
                  <FaUserCircle />
                </IconContext.Provider>
                <div>
                    <p className='detail__contents'>{name}</p>
                    <p className='location__content'>{location}</p>
                </div>
                <div className='PersonalityTest__score'>
                <hr
                        style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '1px',
                        width: '50rem',
                        opacity:'0.2',
                        marginBottom:'10px',
                        marginTop:'10px',
                        }}
                     />
                  <div className='result__display'>
                     Personality Label : <span className='label__display'> {label} </span>
                  </div>
                </div>
                <button onClick={handleChange}>
                   Try Aptitude Test
                </button>
            </div>
    </div>
  )
}

export default PersonalityScore