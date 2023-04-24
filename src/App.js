import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import PersonalitySuccess from "./pages/PersonalitySuccess/PersonalitySuccess";
import SignUp from "./pages/SignUp/SignUp";
import AptitudeScore from "./pages/AptitudeScore/AptitudeScore";
import ResumeUploadSuccess from "./pages/ResumeUploadSuccess/ResumeUploadSuccess";
import DetailAdd from "./pages/DetailAdd/DetailAdd";
import Profile from "./pages/Profile/Profile";
import GenderSelection from "./components/GenderSelection/GenderSelection";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <BrowserRouter>
       <Routes>    
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/PersonalitySuccess" element={<PersonalitySuccess/>} />
            <Route path="/resume-upload" element={<ResumeUploadSuccess />} />
            <Route path="/detail-add1" element={<DetailAdd />} />
            <Route path="/detail-add2" element={<DetailAddTwo />} />
            <Route path="/rough" element={<GenderSelection />} />
            <Route path="/Profile" element={<Profile />} />

      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;