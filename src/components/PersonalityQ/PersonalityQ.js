import React, { useState, useEffect } from 'react';
import './PersonalityQ.css';
import { baseUrl } from '../../utils/Urls';
import axiosInstance from '../../auth/authHandler';
import PersonalitySuccess from '../PersonalitySuccess/PersonalitySuccess';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    question: '1: How often do you seek out new experiences and sensations?',
    options: ['','' ,'' ,'' ,'' ,'' ,'' ,'' ],
  },
  {
    question: '2: How would you describe your level of extraversion?',
    options: ['', '', '', '', '', '', '', ''],
  },
  {
    question: '3: How do you handle stressful situations?',
    options: ['', '', '', '', '', '', '', ''],
  },
  {
    question: '4: Are you more inclined towards being organized or spontaneous?',
    options: ['', '', '', '', '', '', '', ''],
  },
  {
    question: '5: How do you make decisions?',
    options: ['', '', '', '', '', '', '', ''],
  },
];

const PersonalityQ = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const[open,setOpen]=useState(false);
  const[idval,setId] = useState('');
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
  const handleModal=()=>{
    setOpen(true)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      setOpen(true); 
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  const renderOptions = () => {
    return questions[currentQuestion].options.map((option, index) => (
      <label className='radio_questions' key={index}>
        <input
          type='radio'
          name='answer'
          value={option}
          checked={selectedOption === option}
          onChange={handleOptionChange}
        />
        {option}
      </label>
    ));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='persolityq_container'>
        <div className='questions_container'>
          <h1>{questions[currentQuestion].question}</h1>
          <div className='radio_container'>{renderOptions()}</div>
          <div className='radio_optLabel'>
            <div className='strongly__label'>Strongly Disagree</div>
            <div className='agree__label'>Strongly Agree</div>
          </div>
        </div>
        <div>
        {currentQuestion === questions.length - 1 ? (
          <button className='personalityQ_submit_btn' type="submit" onClick={handleModal}>
            Submit
          </button>
        ) : (
          <button className="personalityQ_submit_btn" type="button" onClick={handleNextQuestion}>
            Next
          </button>
        )}
        </div>
        <PersonalitySuccess open={open} setOpen={setOpen}/>
      </div>
     
    </form>
  );
};

export default PersonalityQ;
