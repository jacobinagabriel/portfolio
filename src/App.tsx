import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SalesDemo from './components/demos/SalesDemo';
import './styles/animations.css';

function MainContent() {
  return (
    <>
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    document.title = "Gabriel Jacobina Portfolio";
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-deep text-parchment font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/demo/sales-dashboard" element={<SalesDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;