import React from 'react'
import "./Navbar.css"
// import { Link } from "react-scroll";
// import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  // const navigate=useNavigate()
  return (
    <div>
      <nav className='navbar__container'>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href ="#">PROFILE</a>
        </li>
        <li>
          <a href="#">INSIGHTS</a>
        </li>
        <li>
          <a href="#">LOGIN</a>
        </li>
        <li>
          <a href="#">GET STARTED</a>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar