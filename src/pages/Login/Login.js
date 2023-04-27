import React, { useState } from 'react';
import './Login.css';
const Login = () => {
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
    
  }
  return (
    <div className="login-container">
      <div className='Login_content'>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
        
        
        <button type="submit">Log In</button>
      </form>
      <div className="login-link">
        <p>Don’t have an account?  <a href="#">Sign Up</a></p>
      </div>
      </div>
    </div>
  )
}

export default Login