import React,{useState,useEffect} from 'react'
import './DetailAdd.css'
import GenderSelection from '../../components/GenderSelection/GenderSelection'
import {FaUserAlt} from 'react-icons/fa'
import {FaCalendarAlt} from 'react-icons/fa'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaVenus} from 'react-icons/fa'
// import axios from 'axios';
import { baseUrl } from '../../utils/Urls'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast"; 
import axiosInstance from '../../auth/authHandler'


const DetailAdd = () => {
    const navigate = useNavigate();
    const [userid, setUserId] = useState(null);
  const [dob, setDob] = useState('');
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');
  const [idval, setId] = useState('');

  useEffect(() => {
    // Fetch the related user object and set the user id state
    axiosInstance.get(`${baseUrl}/current-user/`)
      .then(response => {
        setUserId(response.data.username);
        setId(response.data.id);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.post(`${baseUrl}/detail-add/`,
    {
      name:userid,
      dob: dob,
      location: location,
      gender: gender
  }).then((response)=>{
    if(response.status===201){
    toast.success("Message sent successfully!!!")
      navigate("/detail-add2")
    //   window.location.reload();
    }
  },(error)=>{
    console.log(error)
    toast.error('Something went wrong')
  })
  };
  const handleGenderChange = (gender) => {
    console.log(`Selected Gender: ${gender}`);
    setGender(gender);
  };
  return (
    <div className='detail_add__container'>
        <div className='detail_add__contents'>
            <FaVenus size='50' color='#4AA9BC'/>
                <div className='quote__content'>
                    <p>You're about to start exploring, so</p>
                    <p><span className='next__line'>tell about yourself!</span></p>
                </div>
            <div className='input__contents'>
            <>
                <form onSubmit={handleSubmit}>
                  <div className='input_detail'>
                    <label htmlFor="name"><FaUserAlt/> Name:
                    <input
                type="text"
                id="name"
                name="name"
                value={userid}
                required
                readOnly
              />
                    </label>
                    <hr/>
                      <label htmlFor="dob"><FaCalendarAlt/> D.O.B:
                          <input
                          type="date"
                          id="dob"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          required
                          />
                      <hr/>
                      </label>
                      <label htmlFor="location"><FaMapMarkerAlt/> Location:
                          <input
                          type="text"
                          id="location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          required
                          />
                      </label>
                      </div>  
                  <div>
                      <GenderSelection onGenderChange={handleGenderChange}/>
                  </div>
                  <div>
                      <button>
                          Next 
                      </button>
                  </div>
                </form>
            </>
         </div>
        </div>
    </div>
  );
}

export default DetailAdd;