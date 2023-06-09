import React, { useState,useEffect } from 'react'
import './AptitudeQ.css';
import AptitudeSuccess from "../AptitudeSucess/AptitudeSuccess"
import axios from 'axios';
import { baseUrl } from '../../utils/Urls';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../auth/authHandler';

const questions = [
  {
    id : 1,
    question: "A software engineer has the capability of thinking 100 lines of code in five minutes and can type 100 lines of code in 10 minutes. He takes a break for five minutes after every ten minutes. How many lines of codes will he complete typing after an hour?",
    options: ["250 ", "220", "150", "200"],
    answer: 1
  },
  {
    id : 2,
    question: "Nikhil gets Rs.250 from his parents every week for his expenses. He puts Rs.5 in his piggy bank on everyday except Sunday when he puts Rs.10 in the piggy bank. He eats subsidized lunch in the college canteen for Rs. 10 on all college days except Saturday when he treats himself to the special lunch for Rs.25. Bus fare to college is Rs.4 each way. He has got a holiday on Sunday. This week, Nikhil wants to buy a book which costs Rs.100. For this, he was walking to and from the college. He is left with Rs.3 after buying the book. Assuming no other expenses, how many times did Nikhil walk this week?",
    options: ["2 ", "3", "4", "5" ],
    answer: 3
  },
  {
    id : 3,
    question: " In a certain code language, if the number 1 is assigned to all the letters in odd numbered places in the alphabet  and the remaining letters are assigned the number 2, than what is the code for the word ‘DANCE’?",
    options: ["21211 ", "12121", "22111", "21121"],
    answer: 1
  },
  {
    id : 4,
    question: " Akshar, Brinda, Cathy and Dinesh are four friends who live in the same area and work for the children in a nearby slum. One of them cooks the childrens breakfast and each of the other three teach a different subject from mathematics, reading & writing and drawing. They study mechanical engineering, psychology, medicine and economics. Neither the economics nor the psychology student cooks breakfast. Brinda does not teach reading & writing. Dinesh is the medical student, and he does not cook breakfast. Cathy teaches drawing. Akshar studies mechanical engineering. Who teaches mathematics?",
    options: ["Akshar ", "Brinda", "Cathy", "Dinesh"],
    answer: 2
  },
  {
    id : 5,
    question: " A monkey starts climbing up a tree 20ft. tall. Each hour, it hops 3ft. and slips back 2ft. How much time would it take the monkey to reach the top?",
    options: ["21 hours ", "12 hours", "18 hours", "15 hours"],
    answer: 3
  }


  
];

function AptitudeQ() {
  const[idval,setId] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate=useNavigate();
  
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
  
  const handleOptionClick = (optionIndex) => {
    console.log('currentQuestion:', currentQuestion);
    console.log('questions:', questions);
  
    const questionId = questions[currentQuestion].id;
    console.log('questionId:', questionId);
  
    if (questionId) {
      const selectedOption = optionIndex + 1;
      console.log('selectedOption:', selectedOption);
      axios
        .post(`${baseUrl}/training/question/${questionId}/submit-answer`, { selectedOption })
        .then((response) => {
          // Handle the response if needed
          console.log(response.data);
        })
        .catch((error) => {
          // Handle errors
          console.error(error);
        });
  
      setSelectedOption(selectedOption);
    } else {
      console.log('Question not found');
    }
  };
  
  const[open,setOpen]=useState(false)

  const handleModal=()=>{
    const selectedOption = selectedOption + 1;
   const questionId = questions[currentQuestion].id; 

  axios.post(`${baseUrl}/training/questions/${questionId}/submit-answer`, { selectedOption })
    .then(response => {
      // Handle the response if needed
      console.log(response.data);
    })
    .catch(error => {
      // Handle errors
      console.error(error);
    });
    setOpen(true)
  }

  const handleNextQuestion = () => {
    
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setSelectedOption(null);
  };

  

  const renderOptions = () => {

      return questions[currentQuestion].options.map((option, index) => (
        <button
          key={index}
          className={`option ${selectedOption === index ? "selected" : ""}`}
          onClick={() => handleOptionClick(index)}
        >
          {option}
        </button>
      ));
    } ;

  const isLastQuestion = currentQuestion === questions.length - 1;
  return (
    <div className="aptitude_container">
      <h1>{questions[currentQuestion].id}.{questions[currentQuestion].question}</h1>
      <div className="options-container">{renderOptions()}</div>
        <div className='aptitude__btns'>
        {!isLastQuestion && (
        <button className='aptitude_nxtbutton' onClick={handleNextQuestion}>
          Next
        </button>
      )}
      {isLastQuestion && (
        <button className='aptitude_smtbutton' type="submit" onClick={() => {
          navigate(`/AptitudeSuccess?id=${idval}`);
        }}>
          Submit
        </button>
      )}
        </div>
        {/* <AptitudeSuccess open={open} setOpen={setOpen}/> */}

    </div>
  );
}

export default AptitudeQ;
