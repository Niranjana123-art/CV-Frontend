import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ResumeUploadSuccess from "./pages/ResumeUploadSuccess/ResumeUploadSuccess";
import DetailAdd from "./pages/DetailAdd/DetailAdd";
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
            <Route path="/resume-upload" element={<ResumeUploadSuccess />} />
            <Route path="/detail-add1" element={<DetailAdd />} />
            <Route path="/rough" element={<GenderSelection />} />
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;