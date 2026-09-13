import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-deep/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
        <div className="flex-shrink-0 flex items-center">
            <span className="text-ink-link font-bold text-xl">GJ<span className="text-ink-bright">Portfolio</span></span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <button onClick={() => scrollToSection('hero')} className="text-ink hover:text-ink-link transition-colors px-3 py-2">Home</button>
              <button onClick={() => scrollToSection('skills')} className="text-ink hover:text-ink-link transition-colors px-3 py-2">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-ink hover:text-ink-link transition-colors px-3 py-2">Projects</button>
            </div>
          </div>
          
          {/* Social links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/gabriel-jacobina/" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-ink-link transition-colors">
              <Github size={27} />
            </a>
            <a href="https://linkedin.com/in/gabriel-jacobina/" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-ink-link transition-colors">
              <Linkedin size={27} />
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-ink hover:text-ink-bright focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-surface shadow-xl">
          <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-ink hover:text-ink-link px-3 py-2 rounded-md">Home</button>
          <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-ink hover:text-ink-link px-3 py-2 rounded-md">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-ink hover:text-ink-link px-3 py-2 rounded-md">Projects</button>
          
          <div className="flex space-x-4 px-3 py-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-ink-link">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-ink-link">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;