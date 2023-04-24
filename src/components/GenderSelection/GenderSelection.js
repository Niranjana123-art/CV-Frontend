import React, { useState } from 'react';
import './GenderSelection.css'
function GenderSelection() {
  const [selectedGender, setSelectedGender] = useState('');

  function handleGenderChange(event) {
    setSelectedGender(event.target.value);
  }

  return (
    <div className="gender-selection-wrapper">
      <p>Select your gender:</p>
      <div>
        <input
          type="checkbox"
          id="male"
          name="gender"
          value="male"
          checked={selectedGender === 'male'}
          onChange={handleGenderChange}
        />
        <label htmlFor="male">Male</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="female"
          name="gender"
          value="female"
          checked={selectedGender === 'female'}
          onChange={handleGenderChange}
        />
        <label htmlFor="female">Female</label>
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
