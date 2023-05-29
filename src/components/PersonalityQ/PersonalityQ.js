import React, { useState, useEffect } from 'react';
import './PersonalityQ.css';
import { baseUrl } from '../../utils/Urls';
import axiosInstance from '../../auth/authHandler';
import PersonalitySuccess from '../PersonalitySuccess/PersonalitySuccess';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    question: '1: How often do you seek out new experiences and sensations?',
    options: ['', '', '', '', '', '', '', ''],
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
  const[personalityScores, setPersonalityScores] = useState([]);
  const[name,setName]=useState('');
  const[gender,setGender]=useState('');
  const[age,setAge] = useState('');
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
    const[openness,neuroticism,conscientiousness,agreeableness,extraversion] = personalityScores;
    const requestBody = {
      name:name,
      Gender:gender,
      Age:age,
      openness:openness,
      neuroticism:neuroticism,
      conscientiousness:conscientiousness,
      agreeableness:agreeableness,
      extraversion:extraversion
    };

    axiosInstance.post(`${baseUrl}/training/predict/`,requestBody)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
    setOpen(true);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleOptionChange = (event) => {
    const selectedIndex = parseInt(event.target.value);
    const selectedValue = selectedIndex + 1
    console.log(selectedValue);
    setSelectedOption(selectedValue);
    const updatedScores = [...personalityScores];
    updatedScores[currentQuestion] = selectedValue;
    setPersonalityScores(updatedScores);
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
          value={index}
          checked={selectedOption === index+1}
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
        {currentQuestion === 0 && (
            <div className='details__add'>
            <label htmlFor="name"> Name:
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
            </label>
            <label htmlFor="name"> Gender:
                  <input
                    type="text"
                    id="gender"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  />
            </label>
            <label htmlFor="name"> Age:
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                    required
                  />
            </label>
            </div>
        )}
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
