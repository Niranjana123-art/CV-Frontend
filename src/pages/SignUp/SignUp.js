
import React, { useState } from 'react';
import './SignUp.css';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to submit form data goes here
  }
  return (
    <div className="SignUp_container">
   
          <div className='SignUp_content'>
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={handleEmailChange} required />

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} required />

                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input type="password" id="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />

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
