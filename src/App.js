import './App.css';
import "./components/Navbar"
import Navbar from './components/Navbar';
import "./App.css"
import Home from "./components/Home"
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Sigup from './components/Sigup';
import { Route, Routes } from 'react-router-dom';
import Errorpage from "./components/404error";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
         <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Sigup/>} />
          <Route path="*" element={<Errorpage/>} />
        </Routes>
    </>
  );
}

export default App;
