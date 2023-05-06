
import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import { baseUrl } from '../../utils/Urls';
import { useNavigate } from 'react-router-dom';
import CustomTitle from '../../utils/CustomTitle';


const SignUp = () => {
  const[email,setEmail]=useState('')
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('')
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post(`${baseUrl}/register/`,{
      email:email,
      username:username,
      password:password,
    }).then(response=>{
      console.log(response)
      if(response.status===201){
        navigate('/login')
      }
    },error=>{
      console.log(error)
    })
  }
  return (
    <div className="SignUp_container">
   
          <div className='SignUp_content'>
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />

                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />

                        <label htmlFor="confirm-password">Password:</label>
                        <input type="password" id="confirm-password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />

                        <button type="submit">Sign up</button>
                </form>
                <div className="SignUp_link">
                   <p>Already have an account? <a href="#">Log in here</a></p>
                </div>
          </div>
</div>
  )
}

export default SignUp
