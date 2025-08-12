import React from "react";
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";
import GlobalVantaBackground from "./Components/GlobalVantaBackground";

function App() {
  return (
    <div>
      <GlobalVantaBackground/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/resume" element={<Resume/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
