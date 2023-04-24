import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import PersonalitySuccess from "./components/PersonalitySuccess/PersonalitySuccess";
import SignUp from "./pages/SignUp/SignUp";
import DetailAddTwo from "./pages/DetailAddTwo/DetailAddTwo";
import ResumeUploadSuccess from "./pages/ResumeUploadSuccess/ResumeUploadSuccess";

function App() {
  return (
    <div className="App">
      <Navbar/>    
        <BrowserRouter>
        <Routes>    
              <Route path="/" element={<Landing />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/PersonalitySuccess" element={<PersonalitySuccess/>} />
              <Route path="/DetailAddTwo" element={<DetailAddTwo/>} />
              <Route path="/ResumeUploadSuccess" element={<ResumeUploadSuccess/>} />
            
           
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;