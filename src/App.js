import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import PersonalitySuccess from "./pages/PersonalitySuccess/PersonalitySuccess";

function App() {
  return (
    <BrowserRouter>
       <Routes>    
            <Route path="/" element={<Landing />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/PersonlitySucess" element={<Login />} />
            <Route path="/PersonalitySuccess" element={<PersonalitySuccess/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;