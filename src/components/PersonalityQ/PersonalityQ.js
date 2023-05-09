import React, { useState } from 'react';
import './PersonalityQ.css'; 

const PersonalityQ = () => {
  const [answer, setAnswer] = useState(null);

  const options = [
    'Strongly Agree',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'Strongly Disagree'
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected answer: ${answer}`);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='persolityq_container'>

                <div className='questions_container'>
                    <h3>How often do you seek out new experiences and sensations?</h3>
                    <div className='radio_container'>
                    {options.map((option, index) => (
                        <label className='radio_questions' key={index}>
                        <input
                            type="radio"
                            name="answer"
                            value={option}
                            checked={answer === option}
                            onChange={(event) => setAnswer(event.target.value)}
                        />
                        {option}
                        </label>
                    ))}
                    </div>
                </div>
      </div>
    </form>

  );
};

export default PersonalityQ;
