import React, { lazy, Suspense } from "react";
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";
import GlobalVantaBackground from "./Components/GlobalVantaBackground";

const Experience = lazy(() => import("./Components/Experience"));
const Projects = lazy(() => import("./Components/Projects"));
const Resume = lazy(() => import("./Components/Resume"));

const Loading = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '60vh',
    color: '#E0E1DD'
  }}>
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function App() {
  return (
    <div>
      <GlobalVantaBackground />
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
