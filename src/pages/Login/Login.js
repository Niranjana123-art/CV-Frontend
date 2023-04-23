import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='Loginform_main'>
        
        <form className='main_form'>
            <input  className='su__input_taker' placeholder='email' 
            type="text"  />
            <input  className='su__input_taker' placeholder='password' 
             type="password"  />
        </form>
           
    </div>
  )
}

export default Login