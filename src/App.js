import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import PersonalitySuccess from "./pages/PersonalitySuccess/PersonalitySuccess";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>    
        <BrowserRouter>
        <Routes>    
              <Route path="/" element={<Landing />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/PersonlitySucess" element={<Login />} />
              <Route path="/PersonalitySuccess" element={<PersonalitySuccess/>} />
              <Route path="/Navbar" element={<Navbar/>} />
           
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;