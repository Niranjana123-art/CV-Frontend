// import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axiosInstance from "./auth/authHandler";
// import { baseUrl } from "./utils/Urls";
import './App.css';
import DetailAddTwo from "./pages/DetailAddTwo/DetailAddTwo"
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import AptitudeScore from "./pages/AptitudeScore/AptitudeScore";
import ResumeUploadSuccess from "./pages/ResumeUploadSuccess/ResumeUploadSuccess";
import DetailAdd from "./pages/DetailAdd/DetailAdd";
import Profile from "./pages/Profile/Profile";
import GenderSelection from "./components/GenderSelection/GenderSelection";
import PersonalityScore from "./pages/PersonalityScore/PersonalityScore";
import PersonalitySuccess from "./components/PersonalitySuccess/PersonalitySuccess";
import AptitudeSuccess from "./components/AptitudeSucess/AptitudeSuccess";
import PictureDisplay from "./pages/PictureDisplay/PictureDisplay";
import PersonalityQ from "./components/PersonalityQ/PersonalityQ";
import AptitudeQ from "./components/AptitudeQ/AptitudeQ";


function App() {
  return (
    <div className="App">
  
    <BrowserRouter>
    {/* <Navbar/> */}
       <Routes>    
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resume-upload" element={<ResumeUploadSuccess />} />
            <Route path="/PersonalitySuccess" element={<PersonalitySuccess />} />
            <Route path="/AptitudeSuccess" element={<AptitudeSuccess />} />
            <Route path="/detail-add1" element={<DetailAdd />} />
            <Route path="/detail-add2" element={<DetailAddTwo />} />
            <Route path="/rough" element={<GenderSelection />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/personality-score" element={<PersonalityScore />} />
            <Route path="/aptitude-score" element={<AptitudeScore />} />
            <Route path="/pic-display" element={<PictureDisplay />} />
            <Route path="/personalityq" element={<PersonalityQ />} />
            <Route path="/aptitudeq" element={<AptitudeQ />} />
            
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;