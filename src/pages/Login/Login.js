import React,{ useState } from 'react'
// import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
  }
  return (
    <div className='login__container'>
    <div className='login__content'>
    <h1>Log In</h1>
    <form onSubmit={handleLogin}>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => {
                setEmail(e.target.value);
              }}/>
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => {
                setPassword(e.target.value);
              }} />
      </label>
      <br />
      <button type="submit">Log In</button>
    </form>
    <div className='login__link'>
      <p>Don't have an account?<a href='#'>Sign Up</a></p>
    </div>
    </div> 
  </div>
  );
}

export default Login;