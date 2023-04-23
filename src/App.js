import './App.css';
import Landing from './pages/Landing/Landing';
// import Login from './pages/Login/Login';
//import SignUp from './pages/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
    </div>
  );
}

export default App;