import React, { useState } from 'react';
import './PersonalityQ.css'; 
import PersonalitySuccess from "../PersonalitySuccess/PersonalitySuccess"
const PersonalityQ = () => {
  const [answer, setAnswer] = useState(null);

  const options = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected answer: ${answer}`);
  };
  const[open,setOpen]=useState(false)
  const handleModal=()=>{
    setOpen(true)
  }

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
                    <div className='radio_optLabel'>
                      <div>Strongly Agree</div>
                      <div>Strongly Disagree</div>
                    </div>
                </div>
                <div>
                  <button className='personalityQ_submit_btn' type="submit" onClick={handleModal}>Submit</button>
                </div>
      </div>
      <PersonalitySuccess open={open} setOpen={setOpen}/>
    </form>

  );
};

export default PersonalityQ;
