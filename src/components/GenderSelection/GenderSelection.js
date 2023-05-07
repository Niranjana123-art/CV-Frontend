import React, { useState } from 'react';
import './GenderSelection.css'
function GenderSelection (props) {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange= (e) => {
    setSelectedGender(e.target.value);
    props.onGenderChange(e.target.value);
  };

  return (
    <div className="gender-selection-wrapper">
      <p>Select your gender:</p>
      <div>
        <input
          type="checkbox"
          id="Male"
          name="gender"
          value="Male"
          checked={selectedGender === 'Male'}
          onChange={handleGenderChange}
        />
        <label htmlFor="Male">Male</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="Female"
          name="gender"
          value="Female"
          checked={selectedGender === 'Female'}
          onChange={handleGenderChange}
        />
        <label htmlFor="Female">Female</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="other"
          name="gender"
          value="other"
          checked={selectedGender === 'other'}
          onChange={handleGenderChange}
        />
        <label htmlFor="other">Other</label>
      </div>
    </div>
  );
}

export default GenderSelection;
