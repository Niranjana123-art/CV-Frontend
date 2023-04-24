import React,{useState} from 'react'
import './DetailAdd.css'
import GenderSelection from '../../components/GenderSelection/GenderSelection'
import {FaUserAlt} from 'react-icons/fa'
import {FaCalendarAlt} from 'react-icons/fa'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaVenus} from 'react-icons/fa'

const DetailAdd = () => {
    const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [location, setLocation] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Name:', name);
    console.log('DOB:', dob);
    console.log('Location:', location);
  }
  return (
    <div className='detail_add__container'>
        <div className='detail_add__contents'>
        <FaVenus size={50} color='#4AA9BC'/>
            <div className='quote__content'>
            <p>You're about to start exploring, so</p>
            <p><span className='next__line'>tell about yourself!</span></p>
            </div>
            <div className='input__contents'>
            <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"><FaUserAlt/> Name:
                <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                />
                </label>
    

                <label htmlFor="dob"><FaCalendarAlt/> D.O.B:
                <input
                type="date"
                id="dob"
                value={dob}
                onChange={(event) => setDob(event.target.value)}
                required
                 />
                </label>
                <label htmlFor="location"><FaMapMarkerAlt/> Location:
                <input
                type="text"
                id="location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                required
                />
                </label>
            </form>
            </>
            <div>
                <GenderSelection/>
            </div>
            <div>
                <button>
                    Next 
                </button>
            </div>
        </div>
        </div>
    </div>
  );
}

export default DetailAdd;