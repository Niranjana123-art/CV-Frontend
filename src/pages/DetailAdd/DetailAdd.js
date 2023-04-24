import React,{useState} from 'react'
import './DetailAdd.css'
import GenderSelection from '../../components/GenderSelection/GenderSelection'

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
            <div>
            <p>You're about to start exploring, so tell about yourself!</p>
            </div>
            <div className='input__contents'>
            <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                />

                <label htmlFor="dob">Date of Birth:</label>
                <input
                type="date"
                id="dob"
                value={dob}
                onChange={(event) => setDob(event.target.value)}
                required
                 />

                <label htmlFor="location">Location:</label>
                <input
                type="text"
                id="location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                required
                />
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