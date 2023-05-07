import React, { useState } from 'react';
import './Login.css';
import CustomTitle from '../../utils/CustomTitle';
import { baseUrl } from '../../utils/Urls';
import axiosInstance from "../../auth/authHandler";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    axiosInstance
      .post(`${baseUrl}/api/token/`, {
        email: email,
        password: password,
      })
      .then(
        (res) => {
          // console.log(res)
          localStorage.setItem("access_token", res.data.access);
          localStorage.setItem("refresh_token", res.data.refresh);
          axiosInstance.defaults.headers["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");
          if (res.status === 200) navigate("/");
        },
        (error) => {}
      );
  };    
  return (
    <div className="login-container">
      <div className='Login_content'>
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value);}} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => {setPassword(e.target.value);}} />
        
        
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