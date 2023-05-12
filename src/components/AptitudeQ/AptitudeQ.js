import React, { useState } from 'react'
import './AptitudeQ.css';

const questions = [
  {
    question: "How often do you seek out new experiences and sensations?",
    options: ["Rarely or never ", "Occasionally", "Sometimes", "Often"," Very often" ],
    answer: 2
  },
  // Add more questions
];

function AptitudeQ() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    // Check answer, provide feedback, and move to the next question
    // Add your logic here

    // Move to the next question
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setSelectedOption(null);
  };

  const renderOptions = () => {
    return questions[currentQuestion].options.map((option, index) => (
      <div
        key={index}
        className={`option ${selectedOption === index ? 'selected' : ''}`}
        onClick={() => handleOptionClick(index)}
      >
        {option}
      </div>
    ));
  };

  return (
    <div className="aptitude_container">
      <h1>{questions[currentQuestion].question}</h1>
      <div className="options-container">{renderOptions()}</div>
      <div className='aptitude_button'>
        <button onClick={handleNextQuestion}>
          Next
        </button>
      </div>
      
    </div>
  );
}

export default AptitudeQ;
